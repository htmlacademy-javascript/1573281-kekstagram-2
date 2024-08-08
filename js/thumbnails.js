import { getImagesArray } from './create-images-array.js';

const usersPictureTepmplate = document.querySelector('#picture').content.querySelector('.picture'); // Шаблон отображения данных
const picturesList = document.querySelector('.pictures'); // Блок, куда будут вставляться данные
const usersDataArray = getImagesArray(); // Сюда записываем результат выполнения функции по формированию данных
const picturesListFragment = document.createDocumentFragment(); // Сюда будут записываться шаблоны с заполненными данными
const renderPhotos = () => {
  usersDataArray.forEach(({url, description, likes, comments})=>{
    const userPicture = usersPictureTepmplate.cloneNode(true);
    const image = userPicture.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    userPicture.querySelector('.picture__likes').textContent = likes;
    userPicture.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(userPicture);
  });

  return picturesList.appendChild(picturesListFragment);
};

export {renderPhotos};

