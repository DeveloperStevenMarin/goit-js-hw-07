
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const img = document.createElement('img');
  img.src = item.preview;
  img.alt = item.description;
  img.dataset.fullsize = item.original;
  img.addEventListener('click', e => {
    const fullsizeImageSrc = e.target.dataset.fullsize;
    const instance = basicLightbox.create(`
      <img src="${fullsizeImageSrc}" width="800" height="600">
    `);
    instance.show();
  });
  gallery.appendChild(img);
});
console.log(galleryItems);
