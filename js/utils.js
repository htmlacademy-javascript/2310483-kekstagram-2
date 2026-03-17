//Генерирует случайное число
const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

// Проверяет событий клавиатуры
const isEscapeKey = (evt) => evt.key === 'Escape' || evt.keyCode === 27;
const isEnterKey = (evt) => evt.key === 'Enter' || evt.keyCode === 13;

export {
  getRandomNumber,
  isEscapeKey,
  isEnterKey,
};
