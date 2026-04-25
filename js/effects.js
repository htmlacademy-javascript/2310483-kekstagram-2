import { EFFECTS, EffectsSettings, DEFAULT_EFFECT } from './constants';

const effectsList = document.querySelector('.effects__list');
const sliderFieldset = document.querySelector('.effect-level');
const effectsSlider = document.querySelector('.effect-level__slider');
const effectsSliderInput = document.querySelector('.effect-level__value');
const imagePreviewWrapper = document.querySelector('.img-upload__preview');
const imagePreview = imagePreviewWrapper.querySelector('img');

let currentEffect = DEFAULT_EFFECT;
const isNoneEffect = () => currentEffect === EFFECTS.NONE;

const applyEffect = (value) => {
  if (isNoneEffect()) {
    imagePreview.style.filter = '';
    return;
  }
  const {style, units} = EffectsSettings[currentEffect];
  imagePreview.style.filter = `${style}(${value}${units})`;
  effectsSliderInput.value = value;
};

const initSlider = () => {
  noUiSlider.create(effectsSlider, EffectsSettings[currentEffect].slider);
  effectsSlider.noUiSlider.on('update', () => {
    const value = effectsSlider.noUiSlider.get();
    applyEffect(value);
  });
};

const setEffect = (effect) => {
  currentEffect = effect;
  if (isNoneEffect()) {
    sliderFieldset.classList.add('hidden');
    imagePreview.style.filter = '';
    return;
  }

  sliderFieldset.classList.remove('hidden');
  effectsSlider.noUiSlider.updateOptions(EffectsSettings[effect].slider);
};

const onEffectsChange = (evt) => {
  if (evt.target.classList.contains('effects__radio')) {
    setEffect(evt.target.value);
  }
};

const initEffects = () => {
  initSlider();
  effectsList.addEventListener('change', onEffectsChange);
};

const resetEffects = () => {
  setEffect(DEFAULT_EFFECT);
};

export {
  initEffects,
  resetEffects
};
