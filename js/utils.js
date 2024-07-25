// Функция получения случайного числа

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция получения случайного элемента массива

const getRandomArrayElement = (dataArray) => dataArray[getRandomInteger(0, dataArray.length - 1)];

export {getRandomInteger, getRandomArrayElement};
