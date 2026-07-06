(function () {
  var toggle = document.querySelector('.mobile-nav');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var nav = document.querySelector('.navigation');
    var open = nav.classList.toggle('show');
    toggle.textContent = open ? '× Close' : 'Menu';
    toggle.setAttribute('aria-expanded', open);
    document.body.classList.toggle('prevent-scroll-mobile', open);
    document.querySelector('header.main-header').classList.toggle('header-prevent-hide', open);
  });
})();
