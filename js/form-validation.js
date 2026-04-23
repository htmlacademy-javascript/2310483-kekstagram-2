const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const hashtagPattern = /^#[a-zа-яё0-9]{1,19}$/i;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'text-error',
});

const isHashtagsValid = (value) => {
  if (!value.trim()) {
    return true;
  }
  const hashtags = value.trim().split(' ');
  if (hashtags.length > 5) {
    return false;
  }
  return hashtags.every((hashtag) => hashtagPattern.test(hashtag));
};

pristine.addValidator(hashtagsInput, isHashtagsValid, 'Макс. 5 хэштегов, без повторов, # + буквы/цифры');
pristine.addValidator(commentInput, (value) => value.length <= 140, 'Макс. 140 символов');

uploadForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

const resetValidation = () => {
  pristine.reset();
};

export {resetValidation};
