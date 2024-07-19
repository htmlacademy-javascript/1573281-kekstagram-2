const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTATORS = [
  'Иван',
  'Сергей',
  'Ирина',
  'Владимир',
  'Виктория',
  'Николай',
  'Альберт',
  'Снежана',
  'Захар'
];

const DESCRIPTION = [
  'Ничего не обычного. Просто фото',
  'Фото хорошее, но чего-то не хватает',
  'Однозначно лайк и репост',
  'Что тут вообще изображено?',
  'На любителя, если честно, я бы так не сделал'
];

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

// Функция получения случайного числа

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция получения случайного элемента массива

const getRandomArrayElement = (dataArray) => dataArray[getRandomInteger(0, dataArray.length - 1)];


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

const createPhoto = () => ({
  id: photoId,
  url: `photos/${photoId++}.jpg`,
  description:  getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(LIKE_NUM_MIN, LIKE_NUM_MAX),
  comments: Array.from({length: getRandomInteger(COMMENTS_NUM_MIN, COMMENTS_NUM_MAX)}, createComments)
});

// Функция формирования массива определенного количества объектов

const similarPhotos = () => Array.from({length: OBJECTS_QUANTITY}, createPhoto);

similarPhotos();

