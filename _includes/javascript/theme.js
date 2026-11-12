// Theme modes. Paper is the default; alternates are blueprint and satellite.
// Two ways to switch: any [data-theme-set] radio control (nav chips, footer
// segmented control), or typing a mode's codeword anywhere outside a form
// field ("blueprint", "satellite" — the original easter-egg path). Modes are
// mutually exclusive. The chosen mode persists in localStorage and is
// restored (before first paint) by the inline script in <head>. With nothing
// stored, the head script follows the OS: Satellite when it prefers dark,
// Paper otherwise, without storing anything; this file keeps following OS
// changes until the visitor picks a mode. It also keeps the controls in sync
// and animates the switch: a quick top-to-bottom sweep where View
// Transitions exist, the older cross-fade where they don't, and neither
// under reduced motion.
(function () {
  var KEY = 'ra-theme';
  var LEGACY_KEY = 'ra-blueprint'; // pre-satellite storage; cleared on write
  // Codeword doubles as the root class. 'map' is experimental — reachable by
  // codeword only, with no control in the selector UI yet; syncControls()
  // simply leaves every radio unchecked while it's active.
  var MODES = ['blueprint', 'satellite', 'map'];
  // Top-of-page ground per mode, for <meta name="theme-color">. The inline
  // script in _includes/head.html carries the same values; keep them in step.
  var GROUNDS = {
    paper: '#FAF9F7',
    blueprint: '#0A2463',
    satellite: '#000000',
    map: '#001832'
  };
  var root = document.documentElement;
  var buf = '';
  var bufMax = 0;
  for (var i = 0; i < MODES.length; i++) {
    if (MODES[i].length > bufMax) bufMax = MODES[i].length;
  }

  function mode() {
    for (var i = 0; i < MODES.length; i++) {
      if (root.classList.contains(MODES[i])) return MODES[i];
    }
    return 'paper';
  }

  // Radio semantics with a roving tabindex: within each radiogroup exactly
  // one option (the checked one) is in the tab order; arrows move within.
  function syncControls() {
    var current = mode();
    var controls = document.querySelectorAll('[data-theme-set]');
    for (var i = 0; i < controls.length; i++) {
      var on = controls[i].getAttribute('data-theme-set') === current;
      controls[i].setAttribute('aria-checked', on ? 'true' : 'false');
      controls[i].setAttribute('tabindex', on ? '0' : '-1');
    }
  }

  function store(next) {
    try {
      localStorage.setItem(KEY, next);
      localStorage.removeItem(LEGACY_KEY);
    } catch (e) {}
  }

  function stored() {
    try {
      return localStorage.getItem(KEY) ||
        (localStorage.getItem(LEGACY_KEY) === '1' ? 'blueprint' : null);
    } catch (e) { return null; }
  }

  function swap(next) {
    for (var i = 0; i < MODES.length; i++) {
      root.classList.toggle(MODES[i], MODES[i] === next);
    }
    root.setAttribute('data-theme', next);
    // Browser chrome (mobile address bar) follows the ground of the mode.
    var chromeMeta = document.querySelector('meta[name="theme-color"]');
    if (chromeMeta) chromeMeta.setAttribute('content', GROUNDS[next] || GROUNDS.paper);
    syncControls();
  }

  // persist: false for the OS-following default, which must not be stored.
  function apply(next, animate, persist) {
    if (persist !== false) store(next);
    var reduce = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (animate && !reduce && document.startViewTransition) {
      // The sweep itself is CSS (:root.theme-sweep in _blueprint.scss).
      root.classList.add('theme-sweep');
      var vt = document.startViewTransition(function () { swap(next); });
      vt.finished.then(done, done);
      return;
    }
    if (animate && !reduce) {
      root.classList.add('theme-anim');
      window.setTimeout(function () { root.classList.remove('theme-anim'); }, 500);
    }
    swap(next);
  }

  function done() { root.classList.remove('theme-sweep'); }

  function toast(next) {
    if (!document.body) return;
    var t = document.createElement('div');
    t.className = 'theme-toast';
    t.setAttribute('role', 'status');
    t.textContent = next.charAt(0).toUpperCase() + next.slice(1) + ' mode';
    document.body.appendChild(t);
    void t.offsetWidth; // reflow so the transition runs
    t.classList.add('is-visible');
    window.setTimeout(function () {
      t.classList.remove('is-visible');
      window.setTimeout(function () { t.remove(); }, 400);
    }, 1400);
  }

  // next: desired mode. opts.toast surfaces the little confirmation (used for
  // the hidden keyboard shortcuts; the visible controls show their own state).
  function setMode(next, opts) {
    opts = opts || {};
    // Already showing it (say, Satellite from the OS default): still store
    // the pick so it sticks when the OS setting changes.
    if (next === mode()) { store(next); syncControls(); return; }
    apply(next, opts.animate !== false);
    if (opts.toast) toast(next);
  }

  // Keep controls in sync with whatever the head script already applied.
  syncControls();

  // Follow the OS light/dark setting until the visitor picks a mode.
  var dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
  if (dark) {
    var follow = function () {
      if (stored()) return;
      var next = dark.matches ? 'satellite' : 'paper';
      if (next !== mode()) apply(next, true, false);
    };
    if (dark.addEventListener) dark.addEventListener('change', follow);
    else if (dark.addListener) dark.addListener(follow);
  }

  // Selector controls (nav chips + footer segmented control).
  document.addEventListener('click', function (e) {
    var opt = e.target.closest ? e.target.closest('[data-theme-set]') : null;
    if (!opt) return;
    setMode(opt.getAttribute('data-theme-set'), { animate: true });
  });

  // Arrow keys move and select within a radiogroup (standard radio behavior).
  document.addEventListener('keydown', function (e) {
    var el = e.target;
    if (!el || !el.getAttribute || el.getAttribute('data-theme-set') == null) return;
    var delta = (e.key === 'ArrowRight' || e.key === 'ArrowDown') ? 1 :
                (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ? -1 : 0;
    if (!delta) return;
    var group = el.closest('[role="radiogroup"]');
    if (!group) return;
    var opts = group.querySelectorAll('[data-theme-set]');
    var idx = Array.prototype.indexOf.call(opts, el);
    var next = opts[(idx + delta + opts.length) % opts.length];
    e.preventDefault();
    next.focus();
    setMode(next.getAttribute('data-theme-set'), { animate: true });
  });

  // Keyboard easter eggs: typing a codeword toggles its mode.
  document.addEventListener('keydown', function (e) {
    var el = e.target;
    if (el && (el.isContentEditable ||
        /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName || ''))) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key == null || e.key.length !== 1 || !/[a-z]/i.test(e.key)) return;

    buf = (buf + e.key.toLowerCase()).slice(-bufMax);
    for (var i = 0; i < MODES.length; i++) {
      var m = MODES[i];
      if (buf.slice(-m.length) !== m) continue;
      buf = '';
      setMode(mode() === m ? 'paper' : m, { animate: true, toast: true });
      break;
    }
  });
})();
