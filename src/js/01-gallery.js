import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from "./gallery-items";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
galleryContainer.innerHTML = makeGallery(galleryItems);
galleryContainer.addEventListener("click", OnGalleryItemClick);

function makeGallery(gallery) {
	return gallery
		.map(
			({ preview, original, description }) =>
				`<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
		)
		.join("");
}

function OnGalleryItemClick(e) {
	e.preventDefault();

	if (!e.target.classList.contains("gallery__image")) {
		return;
	}
}

// const img = e.target;
const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
	alertError: false,
});

lightbox.on("error.simplelightbox", (e) => {
	alert(`Can't find the link to ${e.target.firstElementChild.alt} for some reason 😥`);
});
