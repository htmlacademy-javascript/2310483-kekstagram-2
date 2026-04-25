import { isEscapeKey, isEnterKey } from './utils.js';
import { resetValidation } from './form-validation.js';
import { addScaleListeners, removeScaleListeners, resetScale } from './scale.js';
import { checkValidaty } from './form-validation.js';
import { initEffects, resetEffects } from './effects.js';

const modalWindow = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const uploadImageButton = document.querySelector('.img-upload__input');
const modalCloseButton = document.querySelector('.img-upload__cancel');

uploadForm.method = 'post';
uploadForm.action = 'https://31.javascript.htmlacademy.pro/kekstagram';
uploadForm.enctype = 'multipart/form-data';

const onUploadClick = () => handleOpen();
const onEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    handleClose();
  }
};
const onEnterKeydown = (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    handleClose();
  }
};
const onCloseClick = () => handleClose();
const onSubmit = (evt) => {
  const isValid = checkValidaty();
  if (!isValid) {
    evt.preventDefault();
    return null;
  } else {
    uploadForm.submit();
  }
};

function handleOpen () {
  modalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
  resetScale();
  addScaleListeners();
  uploadForm.addEventListener('submit', onSubmit);
  modalCloseButton.addEventListener('click', onCloseClick);
  modalCloseButton.addEventListener('keydown', onEnterKeydown);
  initEffects();
  document.addEventListener('keydown', onEscapeKeydown);
}
function handleClose () {
  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetValidation();
  resetScale();
  removeScaleListeners();
  uploadForm.reset();
  uploadForm.removeEventListener('submit', onSubmit);
  modalCloseButton.removeEventListener('click', onCloseClick);
  modalCloseButton.removeEventListener('keydown', onEnterKeydown);
  resetEffects();
  document.removeEventListener('keydown', onEscapeKeydown);
}

//Функция открытия модального окна
const onModalOpen = () => {
  uploadImageButton.addEventListener('change', onUploadClick);
};
//Функция закрытия модального окна
const onModalClose = () => {
  handleClose();
};

export {
  onModalOpen,
  onModalClose
};
