{% include /javascript/headspace.js %}
{% include /javascript/menu.js %}
{% include /javascript/theme.js %}
{% include /javascript/header-section.js %}

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

// A note for anyone who opens the console. 'map' is left out on purpose;
// it is still experimental. No colors: the console may be light or dark.
if (window.console && console.log) {
  console.log(
    '%cRyan Arnaudin%c\nProduct designer in Austin, TX. Designed and built this site with Jekyll and Sass, no frameworks.\n\nTry typing %cblueprint%c or %csatellite%c anywhere on the page.\n\nSource: https://github.com/arnaudin/arnaudin.github.io',
    'font: 600 16px/1.6 system-ui, sans-serif;',
    'font: 12px/1.6 ui-monospace, monospace;',
    'font: 600 12px/1.6 ui-monospace, monospace; text-decoration: underline;',
    'font: 12px/1.6 ui-monospace, monospace;',
    'font: 600 12px/1.6 ui-monospace, monospace; text-decoration: underline;',
    'font: 12px/1.6 ui-monospace, monospace;'
  );
}
