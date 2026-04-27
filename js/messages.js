const ERROR_MESSAGE_TIMER = 5000;

const dataErrorTemplate = document.querySelector('#data-error').content;
const dataError = dataErrorTemplate.querySelector('.data-error');
const uploadErrorTemplate = document.querySelector('#error').content;
const uploadErrorMessage = uploadErrorTemplate.querySelector('.error');
const errorButton = uploadErrorMessage.querySelector('.error__button');
const uploadSuccessTemplate = document.querySelector('#success').content;
const uploadSuccessMessage = uploadSuccessTemplate.querySelector('.success');
const successButton = uploadSuccessMessage.querySelector('.success__button');
const { body } = document;

const templates = {
  success: {
    popup: uploadSuccessMessage,
    button: successButton
  },
  error: {
    popup: uploadErrorMessage,
    button: errorButton
  },
};

const showGetPhotosError = () => {
  body.append(dataError);
  setTimeout(() => body.removeChild(dataError), ERROR_MESSAGE_TIMER);
};

const showMessage = (type) => {
  body.classList.add('open-modal');
  const message = templates[type].popup.cloneNode(true);
  body.append(message);

  const onDocumentKeydown = ({ key }) => {
    if (key === 'Escape') {
      message.remove();
      body.classList.remove('open-modal');
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  };

  message.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      message.remove();
      body.classList.remove('open-modal');
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  });

  document.addEventListener('keydown', onDocumentKeydown);
};

export {
  showGetPhotosError,
  showMessage
};
