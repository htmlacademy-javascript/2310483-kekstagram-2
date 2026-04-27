const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.keyCode === 27;

function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  getRandomNumber,
  isEscapeKey,
  debounce,
};
