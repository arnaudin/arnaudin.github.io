// Theme modes. Paper is the default; alternates are toggled by typing their
// codeword anywhere outside a form field ("blueprint", "satellite"), and
// blueprint also has the footer "Paper / Blueprint" switch. Modes are mutually
// exclusive. The chosen mode persists in localStorage and is restored (before
// first paint) by the inline script in <head>; this file keeps the footer
// switch in sync and animates the cross-fade.
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

  function syncControls() {
    var on = mode() === 'blueprint';
    var switches = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < switches.length; i++) {
      switches[i].setAttribute('aria-checked', on ? 'true' : 'false');
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
  // the hidden keyboard shortcuts; the footer switch shows its own state).
  function setMode(next, opts) {
    opts = opts || {};
    if (next === mode()) { syncControls(); return; }
    apply(next, opts.animate !== false);
    if (opts.toast) toast(next);
  }

  // Keep the switch in sync with whatever the head script already applied.
  syncControls();

  // Footer switch: paper <-> blueprint (from satellite it lands on blueprint).
  document.addEventListener('click', function (e) {
    var sw = e.target.closest ? e.target.closest('[data-theme-toggle]') : null;
    if (!sw) return;
    setMode(mode() === 'blueprint' ? 'paper' : 'blueprint', { animate: true });
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
