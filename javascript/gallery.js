// PhotoSwipe 5 lightbox for case-study and blog-post images.
// Case-study gallery links are generated in _includes/layout.html with
// data-pswp-width/height attributes sourced from _data/image_dims.yml.
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';

// Progressive enhancement for blog posts: plain content images (markdown
// images and raw figures) aren't wrapped in gallery anchors at build time,
// so wrap them here. All images in a post become one gallery, giving
// click-to-zoom plus prev/next slideshow navigation.
document.querySelectorAll('.post-wrapper img').forEach((img) => {
  if (img.closest('a')) return; // already linked (don't hijack real links)

  const link = document.createElement('a');
  link.className = 'gallery-link gallery-link-wrap';
  link.href = img.currentSrc || img.src;

  const applyDims = () => {
    if (img.naturalWidth) {
      link.dataset.pswpWidth = img.naturalWidth;
      link.dataset.pswpHeight = img.naturalHeight;
    }
  };
  if (img.complete) {
    applyDims();
  } else {
    img.addEventListener('load', applyDims, { once: true });
  }

  img.parentNode.insertBefore(link, img);
  link.appendChild(img);
});

const lightbox = new PhotoSwipeLightbox({
  gallery: '#maincontent',
  children: 'a.gallery-link',
  pswpModule: () => import('./photoswipe.esm.min.js'),
  showHideAnimationType: 'zoom'
});

// Fallback for links without data-pswp-* dimensions: the inline thumbnail is
// the same source image, so its natural size is the slide size.
lightbox.addFilter('domItemData', (itemData, element) => {
  if (!itemData.w || !itemData.h) {
    const img = element.querySelector('img');
    if (img && img.naturalWidth) {
      itemData.w = img.naturalWidth;
      itemData.h = img.naturalHeight;
    }
  }
  return itemData;
});

lightbox.init();
