import { onOpenModal } from './view-modal';

const template = document.querySelector('#picture').content;

const renderPics = (photos) => {
  const picturesContainer = document.querySelector('.pictures');
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
    picturesContainer.appendChild(picture);
  });
};

export {renderPics};
