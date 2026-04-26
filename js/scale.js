import { getNumberFromString } from './functions.js';

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const buttonDecreaseScale = document.querySelector('.scale__control--smaller');
const buttonIncreaseScale = document.querySelector('.scale__control--bigger');
const imagePreviewWrapper = document.querySelector('.img-upload__preview');
const imagePreview = imagePreviewWrapper.querySelector('img');
const inputScale = document.querySelector('.scale__control--value');


const changeScale = (step) => {
  const initialValue = getNumberFromString(inputScale.value);
  let newValue = initialValue + step;

  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }

  inputScale.value = `${newValue}%`;
  imagePreview.style.transform = `scale(${newValue / 100})`;
};

const decreaseScale = () => changeScale(-SCALE_STEP);
const increaseScale = () => changeScale(SCALE_STEP);

const addScaleListeners = () => {
  buttonDecreaseScale.addEventListener('click', decreaseScale);
  buttonIncreaseScale.addEventListener('click', increaseScale);
};
const removeScaleListeners = () => {
  buttonIncreaseScale.removeEventListener('click', increaseScale);
  buttonDecreaseScale.removeEventListener('click', decreaseScale);
};

const resetScale = () => {
  inputScale.value = '100%';
  imagePreview.style.transform = 'scale(1)';
};

export {
  addScaleListeners,
  removeScaleListeners,
  resetScale
};
