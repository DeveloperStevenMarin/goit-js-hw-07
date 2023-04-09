import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('gallery__item');
  
    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = item.original;
  
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.alt = item.description;
    img.dataset['fullsize'] = item.original;
  
    a.appendChild(img);
    li.appendChild(a);
    gallery.appendChild(li);
  });
  

  const lightbox = new SimpleLightbox('.gallery__item a', {
    captions: true,
    captionsData: 'alt', // use data-caption attribute for captions
    captionPosition: 'bottom',
    captionDelay: 250,
  });