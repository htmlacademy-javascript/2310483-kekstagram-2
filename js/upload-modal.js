import { isEscapeKey } from './utils.js';
import { resetValidation } from './form-validation.js';
import { resetScale } from './scale.js';
import { checkValidaty } from './form-validation.js';
import { resetEffects } from './effects.js';
import { postPhoto } from './api.js';
import { showMessage } from './messages.js';
import { setUploadImage } from './set-upload-image.js';

const modalPopup = document.querySelector('.img-upload__overlay');
const uploadForm = document.querySelector('.img-upload__form');
const uploadImageButton = document.querySelector('.img-upload__input');
const modalCloseButton = document.querySelector('.img-upload__cancel');
const hashTagsInput = document.querySelector('.text__hashtags');
const descriptionInput = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');

const onUploadInputChange = ({ target }) => {
  const file = target.files[0];
  setUploadImage(file);
  handleOpen();
};

const onEscapeKeydown = (evt) => {
  if (document.activeElement === hashTagsInput
    ||
    document.activeElement === descriptionInput
    || document.querySelector('.error')) {
    evt.stopPropagation();
  } else if (isEscapeKey(evt)) {
    evt.preventDefault();
    handleClose();
  }
};

const onCloseClick = () => handleClose();

const blockSubmitButton = (isBlocked = true) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? 'Публикую...' : 'Опубликовать';
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const isValid = checkValidaty();

  if (!isValid) {
    return;
  }

  blockSubmitButton();

  postPhoto(uploadForm)
    .then(() => {
      handleClose();
      showMessage('success');
    })
    .finally(() => {
      blockSubmitButton(false);
    })
    .catch(() => {
      showMessage('error');
    });
};

function handleOpen() {
  modalPopup.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeydown);
}

modalCloseButton.addEventListener('click', onCloseClick);

function handleClose() {
  modalPopup.classList.add('hidden');
  document.body.classList.remove('modal-open');

  uploadForm.reset();
  resetValidation();
  resetScale();
  resetEffects();

  document.removeEventListener('keydown', onEscapeKeydown);
}

const onModalOpen = () => {
  uploadImageButton.addEventListener('change', onUploadInputChange);
};

const onModalClose = () => {
  handleClose();
};

uploadForm.addEventListener('submit', onFormSubmit);

export {
  onModalOpen,
  onModalClose
};
