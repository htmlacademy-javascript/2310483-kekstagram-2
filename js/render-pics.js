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
    const image = picture.querySelector('.picture__img');
    const likesCount = picture.querySelector('.picture__likes');
    const commentsCount = picture.querySelector('.picture__comments');
    const link = picture.querySelector('.picture');
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      onOpenModal(item);
    });
    image.src = url;
    image.alt = description;
    likesCount.textContent = likes;
    commentsCount.textContent = comments.length;
    renderedPhotos.appendChild(picture);
  });
  picturesContainer.appendChild(renderedPhotos);
};

export {renderPics};
