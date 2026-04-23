import {isEscapeKey, isEnterKey} from './utils.js';
import {onSubmit} from './form.js';
import { resetValidation } from './form-validation.js';

const modalWindow = document.querySelector('.img-upload__overlay');
const editForm = document.querySelector('.img-upload__form');
const uploadImageButton = document.querySelector('.img-upload__input');
const modalCloseButton = document.querySelector('.img-upload__cancel');

const handleOpen = () => {
  modalWindow.classList.remove('hidden');
  document.body.classList.add('modal-open');
};
const handleClose = () => {
  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetValidation();
};
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    handleClose();
    editForm.reset();
  }
};
//Функция открытия модального окна
const onModalOpen = () => {
  uploadImageButton.addEventListener('change', () => {
    handleOpen();
  }
  );
  document.addEventListener('keydown', (evt) => onDocumentKeydown(evt)
  );
  onSubmit();
};
//Функция закрытия модального окна
const onModalClose = () => {
  handleClose();
  document.removeEventListener('keydown', (evt) => onDocumentKeydown(evt)
  );
};

//Обработчики
uploadImageButton.addEventListener('change', () => {
  onModalOpen();
});
modalCloseButton.addEventListener('click', () => {
  onModalClose();
});
//обработчик Enter при фокусе на кнопке
modalCloseButton.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    onModalClose();
  }
},
{ once: true }
);

export {
  onModalOpen,
  onModalClose
};
