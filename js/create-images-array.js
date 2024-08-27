import { getDataImagesArray } from './data.js';
import {getRandomInteger, getRandomArrayElement} from './utils.js';

const {COMMENTS, COMMENTATORS, DESCRIPTION } = getDataImagesArray();
const OBJECTS_QUANTITY = 25;
const MESSAGE_NUM_MIN = 1;
const MESSAGE_NUM_MAX = 2;
const COMMENTS_NUM_MIN = 0;
const COMMENTS_NUM_MAX = 30;
const COMMENT_MESSAGE_MIN = 1;
const COMMENT_MESSAGE_MAX = 2;
const LIKE_NUM_MIN = 15;
const LIKE_NUM_MAX = 200;

let photoId = 1;
let commentsId = 1;

// Функция получения текста комментария (одно или два случайных предложения)

const createMessage = () => {
  const message = Array.from({length: getRandomInteger(MESSAGE_NUM_MIN, MESSAGE_NUM_MAX)}, () => getRandomArrayElement(COMMENTS));
  return Array.from(new Set(message)).join(' ');
};

// Функция создает массив объектов комментариев

const createComments = () => ({
  id: commentsId++,
  avatar: `img/avatar-${getRandomInteger(COMMENT_MESSAGE_MIN, COMMENT_MESSAGE_MAX)}.svg`,
  message:  createMessage(),
  name: getRandomArrayElement(COMMENTATORS)
});

// Функция формирования объекта фотографии

const createImagesArray = () => ({
  id: photoId,
  url: `photos/${photoId++}.jpg`,
  description:  getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_NUM_MIN, LIKE_NUM_MAX),
  comments: Array.from({length: getRandomInteger(COMMENTS_NUM_MIN, COMMENTS_NUM_MAX)}, createComments)
});

const getImagesArray = Array.from({length: OBJECTS_QUANTITY}, createImagesArray);
export {getImagesArray};
