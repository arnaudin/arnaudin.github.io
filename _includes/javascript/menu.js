(function () {
  var toggle = document.querySelector('.mobile-nav');
  if (!toggle) return;
  var nav = document.querySelector('.navigation');
  var header = document.querySelector('header.main-header');

  function setOpen(open) {
    nav.classList.toggle('show', open);
    toggle.textContent = open ? '× Close' : 'Menu';
    toggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('prevent-scroll-mobile', open);
    header.classList.toggle('header-prevent-hide', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('show'));
  });

  // Escape closes the dropdown and hands focus back to the toggle, so keyboard
  // users aren't left inside a collapsed menu. The "show" class only exists
  // below the tablet breakpoint, so this is inert on the desktop nav.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' || !nav.classList.contains('show')) return;
    setOpen(false);
    toggle.focus();
  });
})();
