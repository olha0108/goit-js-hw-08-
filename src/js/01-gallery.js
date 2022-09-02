// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryboxConfig = {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};

const galleryOfImages = document.querySelector('.gallery');

const gallerys = galleryItems
  .map(
    ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`
  )
  .join('');

galleryOfImages.insertAdjacentHTML('beforeend', gallerys);
const galleryBox = new SimpleLightbox('.gallery a', galleryboxConfig);

galleryBox.on('show.simplelightbox');

function noOpenModal(e) {
  e.preventDefault();
}
