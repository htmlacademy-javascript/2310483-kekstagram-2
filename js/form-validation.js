const MAX_COUNT_HASHTAGS = 5;
const MAX_DESCRIPTION = 140;
const HASHTAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;

const ErrorMessages = {
  'NOT_VALID_HASHTAG': 'Хэштег должен начинаться с символа "#", содержать цифры и буквы латинского алфавита',
  'EXCESS_HASHTAG': `Не более ${MAX_COUNT_HASHTAGS} хэштегов`,
  'HASHTAG_REPEAT': 'Хэштеги должны быть уникальными',
  'EXCESS_COMMENT': `Не более ${MAX_DESCRIPTION} символов`,
};

const uploadForm = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

let hashtagErrorMessage = null;

const setHashTagErrorMessage = () => hashtagErrorMessage;

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
  const hashtags = value.trim().toLowerCase().split(/\s+/);

  if (hashtags.length > MAX_COUNT_HASHTAGS) {
    hashtagErrorMessage = ErrorMessages.EXCESS_HASHTAG;
    return false;
  }

  const uniques = [...new Set(hashtags)];
  if(hashtags.length !== uniques.length){
    hashtagErrorMessage = ErrorMessages.HASHTAG_REPEAT;
    return false;
  }
  hashtagErrorMessage = ErrorMessages.NOT_VALID_HASHTAG;
  return hashtags.every((hashtag) => HASHTAG_PATTERN.test(hashtag));
};

pristine.addValidator(
  hashtagsInput,
  isHashtagsValid,
  setHashTagErrorMessage
);

pristine.addValidator(
  commentInput,
  (value) => value.length <= MAX_DESCRIPTION,
  ErrorMessages.EXCESS_COMMENT
);

const checkValidaty = () => pristine.validate();

const resetValidation = () => {
  pristine.reset();
};

export {checkValidaty, resetValidation};
