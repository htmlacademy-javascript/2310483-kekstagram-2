import {onOpenModal} from './view-modal.js';

const template = document.querySelector('#picture').content;

const renderPics = (photos) => {
  const picturesContainer = document.querySelector('.pictures');
  const oldPhotos = picturesContainer.querySelectorAll('.picture');

  oldPhotos.forEach((item) => item.remove());

  const renderedPhotos = document.createDocumentFragment();

  photos.forEach((item) => {
    const {url, description, likes, comments} = item;
    const picture = template.cloneNode(true);
    const imagePreview = picture.querySelector('.picture__img');
    const likesCount = picture.querySelector('.picture__likes');
    const commentsCount = picture.querySelector('.picture__comments');
    const pictureAnchor = picture.querySelector('.picture');

    pictureAnchor.addEventListener('click', (evt) => {
      evt.preventDefault();
      onOpenModal(item);
    });

    imagePreview.src = url;
    imagePreview.alt = description;
    likesCount.textContent = likes;
    commentsCount.textContent = comments.length;

    renderedPhotos.appendChild(picture);
  });

  picturesContainer.appendChild(renderedPhotos);
};

export {renderPics};
