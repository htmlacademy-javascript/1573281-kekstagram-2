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

const OBJECTS_QUANTITY = 25;

const DESCRIPTION = [
  'Ничего не обычного. Просто фото',
  'Фото хорошее, но чего-то не хватает',
  'Однозначно лайк и репост',
  'Что тут вообще изображено?',
  'На любителя, если честно, я бы так не сделал'
];

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

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];


// Функция получения текста комментария (одно или два случайных предложения)

const createMessage = () => {
  const message = Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(COMMENTS));
  return Array.from(new Set(message)).join(' ');
};

// Функция создает массив объектов комментариев

const createComments = () => ({
  id: commentsId++, // Решение рабочее, но грязное
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message:  createMessage(),
  name: getRandomArrayElement(COMMENTATORS)
});

// Функция формирования объекта фотографии

const createPhoto = () => ({
  id: photoId,
  url: `photos/${photoId++}.jpg`,
  description:  getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComments)
});

// Функция формирования массива определенного количества объектов

const similarPhotos = () => Array.from({length: OBJECTS_QUANTITY}, createPhoto);

similarPhotos();

