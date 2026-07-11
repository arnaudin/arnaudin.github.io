// Theme modes. Paper is the default; alternates are blueprint and satellite.
// Two ways to switch: any [data-theme-set] radio control (nav chips, footer
// segmented control), or typing a mode's codeword anywhere outside a form
// field ("blueprint", "satellite" — the original easter-egg path). Modes are
// mutually exclusive. The chosen mode persists in localStorage and is
// restored (before first paint) by the inline script in <head>; this file
// keeps the controls in sync and animates the cross-fade.
(function () {
  var KEY = 'ra-theme';
  var LEGACY_KEY = 'ra-blueprint'; // pre-satellite storage; cleared on write
  var MODES = ['blueprint', 'satellite']; // codeword doubles as the root class
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

  function apply(next, animate) {
    var reduce = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (animate && !reduce) {
      root.classList.add('theme-anim');
      window.setTimeout(function () { root.classList.remove('theme-anim'); }, 500);
    }
    for (var i = 0; i < MODES.length; i++) {
      root.classList.toggle(MODES[i], MODES[i] === next);
    }
    root.setAttribute('data-theme', next);
    try {
      localStorage.setItem(KEY, next);
      localStorage.removeItem(LEGACY_KEY);
    } catch (e) {}
    syncControls();
  }

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
    if (next === mode()) { syncControls(); return; }
    apply(next, opts.animate !== false);
    if (opts.toast) toast(next);
  }

  // Keep controls in sync with whatever the head script already applied.
  syncControls();

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
