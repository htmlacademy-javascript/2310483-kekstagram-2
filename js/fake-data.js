import {getRandomNumber} from './utils.js';

// DATA
const PHOTOS_COUNT = 25;
const Likes = {
  MIN: 15,
  MAX: 200
};
const CommentsCount = {
  MIN: 0,
  MAX: 30
};

const names = ['Dan', 'John', 'Dmitriy', 'Endy', 'Keks', 'Html', 'Lebovsky', 'Artem', 'Yana', 'Svetlana'];
const descriptionArray = ['Rocks', 'Blood and Thunder', 'Great Keksby', 'React', 'Html Academy', 'Hexlet', 'Big and ugly'];
const messagesArray = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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
