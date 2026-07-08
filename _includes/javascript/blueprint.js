// Blueprint mode. Two ways in: the footer "Paper / Blueprint" switch, or the
// easter egg — type "blueprint" anywhere outside a form field. The chosen mode
// persists in localStorage and is restored (before first paint) by the inline
// script in <head>; this file keeps the footer switch in sync and animates the
// cross-fade.
(function () {
  var KEY = 'ra-blueprint';
  var SEQ = 'blueprint';
  var root = document.documentElement;
  var buf = '';

  function isOn() { return root.classList.contains('blueprint'); }

  function syncControls() {
    var on = isOn();
    var switches = document.querySelectorAll('[data-theme-toggle]');
    for (var i = 0; i < switches.length; i++) {
      switches[i].setAttribute('aria-checked', on ? 'true' : 'false');
    }
  }

  function apply(on, animate) {
    var reduce = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (animate && !reduce) {
      root.classList.add('theme-anim');
      window.setTimeout(function () { root.classList.remove('theme-anim'); }, 500);
    }
    root.classList.toggle('blueprint', on);
    root.setAttribute('data-theme', on ? 'blueprint' : 'paper');
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
    syncControls();
  }

  function toast(on) {
    if (!document.body) return;
    var t = document.createElement('div');
    t.className = 'theme-toast';
    t.setAttribute('role', 'status');
    t.textContent = on ? 'Blueprint mode' : 'Paper mode';
    document.body.appendChild(t);
    void t.offsetWidth; // reflow so the transition runs
    t.classList.add('is-visible');
    window.setTimeout(function () {
      t.classList.remove('is-visible');
      window.setTimeout(function () { t.remove(); }, 400);
    }, 1400);
  }

  // on: desired state. opts.toast surfaces the little confirmation (used for the
  // hidden keyboard shortcut; the footer switch shows its own checked state).
  function setMode(on, opts) {
    opts = opts || {};
    if (on === isOn()) { syncControls(); return; }
    apply(on, opts.animate !== false);
    if (opts.toast) toast(on);
  }

  // Keep the switch in sync with whatever the head script already applied.
  syncControls();

  // Footer switch.
  document.addEventListener('click', function (e) {
    var sw = e.target.closest ? e.target.closest('[data-theme-toggle]') : null;
    if (!sw) return;
    setMode(!isOn(), { animate: true });
  });

  // Keyboard easter egg.
  document.addEventListener('keydown', function (e) {
    var el = e.target;
    if (el && (el.isContentEditable ||
        /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName || ''))) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key == null || e.key.length !== 1 || !/[a-z]/i.test(e.key)) return;

    buf = (buf + e.key.toLowerCase()).slice(-SEQ.length);
    if (buf === SEQ) { buf = ''; setMode(!isOn(), { animate: true, toast: true }); }
  });
})();
