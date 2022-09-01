// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryOfImages = document.querySelector('.gallery');

const gallerys = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

galleryOfImages.insertAdjacentHTML('beforeend', gallerys);
new SimpleLightbox('.gallery a');

galleryOfImages.addEventListener('click', openOriginalImage);

function openOriginalImage(e) {
  noOpenModal(e);
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  function noOpenModal(e) {
    e.preventDefault();
  }

  const instance = basicLightbox.create(
    `<img src='${e.target.dataset.source}' width="800" height="600">
`,
    {
      onShow: instance => {
        if (e.code === 'Escape') {
          instance.close();
        }
        instance.element().querySelector('img').onclick = instance.close;
      },
    }
  );
  instance.show();
}
