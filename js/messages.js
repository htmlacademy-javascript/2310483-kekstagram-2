const dataErrorTemplate = document.querySelector('#data-error').content;
const dataError = dataErrorTemplate.querySelector('.data-error');
const uploadErrorTemplate = document.querySelector('#error').content;
const uploadError = uploadErrorTemplate.querySelector('.error');
const errorButton = uploadError.querySelector('.error__button');
const uploadSuccessTemplate = document.querySelector('#success').content;
const uploadSuccess = uploadSuccessTemplate.querySelector('.success');
const successButton = uploadSuccess.querySelector('.success__button');
const { body } = document;

const showGetPhotosError = () => {
  body.append(dataError);
  setTimeout(() => body.removeChild(dataError), 5000);
};

const showPostErrorMessage = () => {
  body.append(uploadError);
  errorButton.addEventListener('click', () => {
    body.removeChild(uploadError);
  }, {once: true});
};

const showPostSuccessMessage = () => {
  body.classList.add('open-modal');
  body.append(uploadSuccess);
  successButton.addEventListener('click', () => {
    body.classList.remove('open-modal');
    body.removeChild(uploadSuccess);
  }, {once: true});
};

export {
  showGetPhotosError,
  showPostSuccessMessage,
  showPostErrorMessage
};
