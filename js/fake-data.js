import {getRandomNumber} from './utils.js';
import {
  descriptionArray,
  messagesArray,
  names,
} from './data.js';
import {Likes, CommentsCount, PHOTOS_COUNT} from './constants.js';

//Генерирует массив комментов
const generateFakeCommentsArray = () => Array.from({length: getRandomNumber(CommentsCount.MIN, CommentsCount.MAX)}, (_, id) => ({
  id: id + 26,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: messagesArray[getRandomNumber(0, messagesArray.length - 1)],
  name: names[getRandomNumber(0, names.length)],
}));

//Генерирует массив данных
const generateFakeDataArray = () => Array.from({length: PHOTOS_COUNT}, (_, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: descriptionArray[getRandomNumber(0, descriptionArray.length - 1)],
  likes: getRandomNumber(Likes.MIN, Likes.MAX),
  comments: generateFakeCommentsArray(),
}));

export {generateFakeDataArray};
