const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const decreaseScaleButton = document.querySelector('.scale__control--smaller');
const increaseScaleButton = document.querySelector('.scale__control--bigger');
const imagePreviewWrapper = document.querySelector('.img-upload__preview');
const imagePreview = imagePreviewWrapper.querySelector('img');
const scaleInput = document.querySelector('.scale__control--value');

const changeScale = (step) => {
  const initialValue = parseInt(scaleInput.value, 10);
  let newValue = initialValue + step;

  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }

  scaleInput.value = `${newValue}%`;
  imagePreview.style.transform = `scale(${newValue / MAX_SCALE})`;
};

const onDecreaseScale = () => changeScale(-SCALE_STEP);
const onIncreaseScale = () => changeScale(SCALE_STEP);

decreaseScaleButton.addEventListener('click', onDecreaseScale);
increaseScaleButton.addEventListener('click', onIncreaseScale);

const resetScale = () => {
  scaleInput.value = '100%';
  imagePreview.style.transform = 'scale(1)';
};

export {
  resetScale,
};
