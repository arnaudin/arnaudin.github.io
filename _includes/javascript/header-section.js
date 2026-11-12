// Current section in the sticky header, on project-layout pages only (the
// element exists only there; see _includes/header.html). An
// IntersectionObserver on the numbered section headings (h2#s-*) watches a
// reading line 30% down the viewport; whenever a heading crosses it, the
// current section becomes the last heading above that line.
// The label's width is capped at the room left before the nav, and it is
// dropped when that room is too small for a useful title.
(function () {
  var label = document.querySelector('[data-header-section]');
  if (!label || !('IntersectionObserver' in window)) return;
  var heads = document.querySelectorAll('.project-wrapper h2[id^="s-"]');
  if (!heads.length) return;

  var header = document.querySelector('[data-header]');
  var BAND = 0.3;   // top 30% of the viewport counts as "reading here"
  var MIN = 96;     // px; narrower than this and the title is not worth showing
  var current = -1;

  function show(i) {
    if (i === current) return;
    current = i;
    label.textContent = '';
    if (i < 0) { label.classList.remove('is-set'); return; }
    var num = document.createElement('span');
    num.className = 'header-section-num';
    num.textContent = (i < 9 ? '0' : '') + (i + 1);
    label.appendChild(num);
    label.appendChild(document.createTextNode(heads[i].textContent.trim()));
    label.classList.add('is-set');
  }

  function update() {
    var line = window.innerHeight * BAND;
    var idx = -1;
    for (var i = 0; i < heads.length; i++) {
      if (heads[i].getBoundingClientRect().top <= line) idx = i; else break;
    }
    show(idx);
  }

  // Room between the label's left edge and the first visible nav item (or
  // the Menu button on phones).
  function fit() {
    var left = label.getBoundingClientRect().left;
    var stop = Infinity;
    var items = header.querySelectorAll('.navigation button.mobile-nav, #main-nav-list > li');
    for (var i = 0; i < items.length; i++) {
      var r = items[i].getBoundingClientRect();
      if (r.width && r.left > left && r.left < stop) stop = r.left;
    }
    var room = stop === Infinity ? 0 : Math.floor(stop - left - 24);
    label.style.setProperty('--header-section-max', (room >= MIN ? room : 0) + 'px');
  }

  // The watched zone is everything above the reading line (the huge top
  // margin), so a heading flips state whenever it crosses that line, even
  // when a jump or fast scroll carries it past the band in one frame.
  var io = new IntersectionObserver(update, {
    rootMargin: '100000px 0px -' + (100 - BAND * 100) + '% 0px'
  });
  for (var i = 0; i < heads.length; i++) io.observe(heads[i]);

  var t;
  window.addEventListener('resize', function () {
    clearTimeout(t);
    t = setTimeout(fit, 100);
  });
  fit();
  update();
})();
