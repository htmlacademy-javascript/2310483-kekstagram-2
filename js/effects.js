const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};
const DEFAULT_EFFECT = EFFECTS.NONE;
const EffectsSettings = {
  [EFFECTS.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 80,
      step: 1,
      connect: 'lower',
    },
    style: '',
    units: ''
  },
  [EFFECTS.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    units: ''
  }
};

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
  const { style, units } = EffectsSettings[currentEffect];
  imagePreview.style.filter = `${style}(${value}${units})`;
  effectsSliderInput.value = value;
};

noUiSlider.create(effectsSlider, EffectsSettings[currentEffect].slider);

effectsSlider.noUiSlider.on('update', () => {
  const value = effectsSlider.noUiSlider.get();
  applyEffect(value);
});

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

effectsList.addEventListener('change', onEffectsChange);

const resetEffects = () => {
  setEffect(DEFAULT_EFFECT);
};

export {
  resetEffects
};
