import {getRandomNumber} from './utils.js';
import {
  DescriptionArray,
  MessagesArray,
  Names,
  CommentsCount,
  Likes
} from './data.js';

//Генерирует массив комментов
const generateFakeCommentsArray = () => Array.from({length: getRandomNumber(CommentsCount.MIN, CommentsCount.MAX)}, (_, id) => ({
  id: id + 26,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: MessagesArray[getRandomNumber(0, MessagesArray.length)],
  name: Names[getRandomNumber(0, Names.length)],
}));

//Генерирует массив данных
const generateFakeDataArray = (photosCount) => Array.from({length: photosCount}, (_, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: DescriptionArray[getRandomNumber(0, DescriptionArray.length)],
  likes: getRandomNumber(Likes.MIN, Likes.MAX),
  comments: generateFakeCommentsArray(),
}));

export {generateFakeDataArray};
