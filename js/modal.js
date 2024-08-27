import {isEscapeKey} from './utils.js';

const picturesList = document.querySelector('.pictures'); // Блок, куда всталяются миниатюры
const bigPictureContainer = document.querySelector('.big-picture'); // контейнер модального окна
const bigPictureCancelButton = bigPictureContainer.querySelector('.big-picture__cancel'); // кнопка закрытия модального окна
const commentsCaption = bigPictureContainer.querySelector('.social__caption'); // Описание картинки
const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img').querySelector('img'); // изображение модального окна
const likesCount = bigPictureContainer.querySelector('.likes-count'); // указыавется количество лайков
const socailComments = bigPictureContainer.querySelector('.social__comments'); // блок, внутри которого содержатся все комментарии (ul)
const socialCommentTemplate = socailComments.querySelector('.social__comment'); // блок, в котором содержится один комментарий (li)
const commentsCount = bigPictureContainer.querySelector('.social__comment-count'); // div, внутри которого есть спан с кол-м комментов
const commentsLoadert = bigPictureContainer.querySelector('.social__comments-loader'); // кнопка подгрузки комметарии

const closeBigPicture = () => {
  bigPictureContainer.classList.add('hidden');
  bigPictureCancelButton.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeyDown);
};

function onBigPictureCancelClick() {
  closeBigPicture();
}

function onEscKeyDown() {
  if(isEscapeKey){
    closeBigPicture();
  }
}

const openBigPicture = (pictureId, data) => {
  const currentPhoto = data.find((photo) => photo.id === Number(pictureId));
  const socialCommentsFragment = document.createDocumentFragment();
  bigPictureImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  socailComments.innerHTML = '';
  currentPhoto.comments.forEach((comment) => {
    const socailComment = socialCommentTemplate.cloneNode(true);
    socailComment.querySelector('.social__picture').src = comment.avatar;
    socailComment.querySelector('.social__picture').alt = comment.name;
    socailComment.querySelector('.social__text').textContent = comment.message;
    socialCommentsFragment.appendChild(socailComment);
  });
  commentsCount.appendChild(socialCommentsFragment);
  commentsCaption.textContent = currentPhoto.description;

  commentsCount.classList.add('hidden');
  commentsLoadert.classList.add('hidden');
  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureCancelButton.addEventListener('click', onBigPictureCancelClick);
  document.addEventListener('keydown', onEscKeyDown);

};

const openModal = (dataArr) => {
  picturesList.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    openBigPicture(currentPicture.dataset.pictureId, dataArr);
  });
};

export {openModal};
