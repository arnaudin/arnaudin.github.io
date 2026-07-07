// Gentle scroll-reveal for content blocks. No-JS safe (the CSS only hides
// elements under html.js) and fully skipped when the visitor prefers reduced
// motion or the browser lacks IntersectionObserver.
(function () {
  // Note: case-study/post images are intentionally excluded — they are the
  // star content and must never be gated behind a JS reveal (and stacking a
  // reveal transform on top of native lazy-loading is fragile).
  var SELECTOR = [
    '.project-card',
    '.writing-item',
    '.project-summary',
    '.project-meta',
    '.project-outcomes',
    '.pullquote',
    '.section-label-row'
  ].join(',');

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = [].slice.call(document.querySelectorAll(SELECTOR));

  function show(el) { el.classList.add('is-visible'); }

  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(show);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        show(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  els.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    // Anything already in view reveals right away; the rest waits for scroll.
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show(el);
    } else {
      io.observe(el);
    }
  });

  // Safety net: if the observer never delivers (rare), don't leave content
  // hidden — reveal everything after a few seconds.
  window.setTimeout(function () { els.forEach(show); }, 4000);
})();
