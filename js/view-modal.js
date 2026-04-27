const modalWindow = document.querySelector('.big-picture');
const bigPictureContainer = modalWindow.querySelector('.big-picture__img');
const bigPictureImg = bigPictureContainer.querySelector('img');
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

const renderComments = (comments) => {
  const shownCount = Number(commentsShownCount.textContent);
  const commentsToRender = comments.slice(0, shownCount);
  commentsContainer.innerHTML = '';
  commentsToRender.forEach(createComment);
  commentsLoaderButton.classList.toggle('hidden', comments.length <= Number(commentsShownCount.textContent));
};

const increaseShownCommentsCount = (totalCommentsCount) => {
  let result = Number(commentsShownCount.textContent);
  if (result < totalCommentsCount) {
    result = (totalCommentsCount - result) < 5 ? totalCommentsCount : result + 5;
  }
  commentsShownCount.textContent = result;
};

let onLoadMoreClick = null;

const onCloseModal = () => {
  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', onCloseModal);
  document.removeEventListener('keydown', onCloseModal);
  commentsLoaderButton.removeEventListener('click', onLoadMoreClick);
};

const onOpenModal = (data) => {
  const {url, description, likes, comments} = data;

  commentsTotalCount.textContent = comments.length;
  bigPictureImg.src = url;
  caption.textContent = description;
  likesCount.textContent = likes;
  commentsShownCount.textContent = comments.length >= 5 ? 5 : comments.length;

  renderComments(comments);

  modalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');

  onLoadMoreClick = () => {
    increaseShownCommentsCount(comments.length);
    renderComments(comments);
  };

  commentsLoaderButton.addEventListener('click', onLoadMoreClick);
  closeButton.addEventListener('click', onCloseModal);
  document.addEventListener('keydown', onCloseModal);
};

export {
  onOpenModal,
};
