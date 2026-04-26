//Генерирует случайное число
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

// Проверяет событий клавиатуры
const isEscapeKey = (evt) => evt.key === 'Escape' || evt.keyCode === 27;
const isEnterKey = (evt) => evt.key === 'Enter' || evt.keyCode === 13;

function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {
  getRandomNumber,
  isEscapeKey,
  isEnterKey,
  debounce,
  throttle
};
