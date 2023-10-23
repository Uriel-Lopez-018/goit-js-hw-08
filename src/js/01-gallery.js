// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line




function createItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      `;
    })
    .join('');
}



const galleryHTML = createItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryHTML)


const lightbox = new SimpleLightbox(`.gallery a`, {
    scrollZoom: false,
    captionDelay: 250,
    captionData: `alt`,
    doubleTapZoom: 1,
});

galleryContainer.addEventListener("click" , (event) => {
    event.preventDefault()

        if(!event.target.classList.contains('gallery__image')) {
            return;
        }
})


console.log(galleryItems);




