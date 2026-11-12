{% include /javascript/headspace.js %}
{% include /javascript/menu.js %}
{% include /javascript/theme.js %}

// Open external links in a new tab (rel guards against tabnabbing). Text
// links in the page body also get a small arrow so the new tab isn't a
// surprise (see a.is-external in _links.scss); buttons and links that wrap
// an image or other markup are left alone.
document.querySelectorAll('a[href^="http"]').forEach(function (link) {
  if (link.hostname !== window.location.hostname) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    if (link.closest('main') && !link.children.length &&
        !/(^|\s)button/.test(link.className)) {
      link.classList.add('is-external');
    }
  }
});

Headspace(document.querySelector('[data-header]'), {
  startOffset: 90,
  tolerance: 5,
  showAtBottom: false,
  classNames: {
    base: 'sticky-header',
    fixed: 'sticky-header--fixed',
    hidden: 'sticky-header--hidden'
  }
});
