/*
  Задание:
  1) По клику на миниатюру должно открываться модальное окно .big-picture,
  в котором будет отрисовываться информация кликнутой миниатюры. Отрисовка реализована через удаление класса hidden у .big-picture.
  2) Комментарии вставляются в блок .social__comments.
  3) .social__caption - описание фотографии (description)
  4) после открытия модалки, скрываем через добавление класса hidden счетчик комментариев .social__comment-count и загрузку новых .comments-loader.
  5) после открытия окна добавляем боди класс modal-open. При закрытии, соответственно, удаляем.
  6) закрытие по клику на кнопку и по нажатию на ESC
*/

const modalWindow = document.querySelector('.big-picture');
const bigPictureContainer = modalWindow.querySelector('.big-picture__img');
const bigPictureImg = bigPictureContainer.querySelector('img');
const userAvatar = modalWindow.querySelector('.social__picture');
const caption = modalWindow.querySelector('.social__caption');
const likesCount = modalWindow.querySelector('.likes-count');
const closeButton = modalWindow.querySelector('.big-picture__cancel');
const commentsContainer = modalWindow.querySelector('.social__comments');
const commentItem = modalWindow.querySelector('.social__comment');
const commentsCount = modalWindow.querySelector('.social__comment-count');
const commentsShownCount = commentsCount.querySelector('.social__comment-shown-count');
const commentsTotalCount = commentsCount.querySelector('.social__comment-total-count');
const commentsLoaderButton = modalWindow.querySelector('.social__comments-loader');

const createComment = (commentData) => {
  const {avatar, message, name} = commentData;
  const commentItemClone = commentItem.cloneNode(true);
  const commentAvatar = commentItemClone.querySelector('.social__picture');
  const commentText = commentItemClone.querySelector('.social__text');
  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentText.textContent = message;
  commentsContainer.appendChild(commentItemClone);
};

const onCloseModal = () => {
  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', onCloseModal);
  document.removeEventListener('keydown', onCloseModal);
};
const onOpenModal = (data) => {
  const {url, description, likes, comments} = data;
  commentsCount.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');
  commentsContainer.innerHTML = '';
  comments.forEach(createComment);
  bigPictureImg.src = url;
  caption.textContent = description;
  likesCount.textContent = likes;
  modalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseModal);
  document.addEventListener('keydown', onCloseModal);
};

export {
  onOpenModal,
};
