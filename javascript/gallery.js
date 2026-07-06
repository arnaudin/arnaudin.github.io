// PhotoSwipe 5 lightbox for case-study images.
// Gallery links are generated in _includes/layout.html with
// data-pswp-width/height attributes sourced from _data/image_dims.yml.
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';

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
