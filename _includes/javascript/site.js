{% include /javascript/headspace.js %}
{% include /javascript/menu.js %}
{% include /javascript/theme.js %}

// Open external links in a new tab (rel guards against tabnabbing)
document.querySelectorAll('a[href^="http"]').forEach(function (link) {
  if (link.hostname !== window.location.hostname) {
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
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
