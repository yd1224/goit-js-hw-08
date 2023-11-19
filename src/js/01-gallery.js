// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line


const container = document.querySelector("ul.gallery");

container.classList.add("gallery")

const markup = galleryItems.map(({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}" rel="noopener" onclick="return false;" download>
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
`).join("")

container.innerHTML = markup;

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, overlayOpacity: 0.5 });





