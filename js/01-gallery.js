import { galleryItems } from './gallery-items.js';

// Change code below this line



const refs = {
  galleryEl: document.querySelector('.gallery'),
};


function galleryMarkup (galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href=""${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    }).join('');
};


refs.galleryEl.innerHTML = galleryMarkup (galleryItems);


refs.galleryEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  else {


    function modalCloseOnEscape(e) {
      if (e.code === "Escape") {
        instance.close();
        console.log(e.key);
      };
    };

    const instance = basicLightbox.create(`<img
            src="${e.target.dataset.source}"
            alt="${e.target.alt}"/>`, {
      onClose: () => {
              document.removeEventListener('keydown', modalCloseOnEscape)
      },
      onShow: () => {
              document.addEventListener('keydown', modalCloseOnEscape)
      }
    });
    
    instance.show(); 

  };
});




