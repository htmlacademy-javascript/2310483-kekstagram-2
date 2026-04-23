const uploadForm = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

uploadForm.method = 'post';
uploadForm.action = 'https://31.javascript.htmlacademy.pro/kekstagram';
uploadForm.enctype = 'multipart/form-data';

const onSubmit = () => {
  submitButton.addEventListener('click', () => {
  });
};

export {onSubmit};
