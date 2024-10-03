import { isEscapeKey } from '../utils/utils.js';

const picturesList = document.querySelector('.pictures'); // Блок, куда всталяются миниатюры
const bigPictureContainer = document.querySelector('.big-picture'); // контейнер модального окна
const bigPictureCancelButton = bigPictureContainer.querySelector('.big-picture__cancel'); // кнопка закрытия модального окна
const commentsCaption = bigPictureContainer.querySelector('.social__caption'); // Описание картинки
const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img').querySelector('img'); // изображение модального окна
const likesCount = bigPictureContainer.querySelector('.likes-count'); // указыавется количество лайков
const socialComments = bigPictureContainer.querySelector('.social__comments'); // блок, внутри которого содержатся все комментарии (ul)
const socialCommentTemplate = socialComments.querySelector('.social__comment'); // блок, в котором содержится один комментарий (li)
const commentsTotalCount = document.querySelector('.social__comment-total-count');
const commentsShownCount = document.querySelector('.social__comment-shown-count');
const commentsLoaderButton = document.querySelector('.comments-loader');

const COMMENTS_STEP = 5;

let localComments;
let renderedComments = 0;
let totalComments;

const closeBigPicture = () => {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCancelButton.removeEventListener('click', onBigPictureCancelClick);
  document.removeEventListener('keydown', onEscKeyDown);
};

function onBigPictureCancelClick() {
  closeBigPicture();
}

function onEscKeyDown() {
  if (isEscapeKey) {
    closeBigPicture();
  }
}

const showModal = () => {
  bigPictureContainer.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const renderStatistic = () => {
  commentsShownCount.textContent = renderedComments;
};

const renderComment = (data) => {
  const socialComment = socialCommentTemplate.cloneNode(true);
  socialComment.querySelector('.social__picture').src = data.avatar;
  socialComment.querySelector('.social__picture').alt = data.name;
  socialComment.querySelector('.social__text').textContent = data.message;
  return socialComment;
};

const renderLoader = () => {
  if (totalComments === renderedComments) {
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }
};

const renderComments = () => {
  const socialCommentsFragment = document.createDocumentFragment();
  localComments.splice(0, COMMENTS_STEP).forEach((item) => {
    socialCommentsFragment.append(renderComment(item));
    renderedComments++;
  });
  socialComments.appendChild(socialCommentsFragment);
  renderStatistic();
  renderLoader();
};

const renderModal = (currentPhoto) => {
  bigPictureImg.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  commentsCaption.textContent = currentPhoto.description;
  renderComments();
};

const openBigPicture = (currentPhoto) => {
  showModal();
  localComments = [...currentPhoto.comments];
  socialComments.innerHTML = '';
  renderedComments = 0;
  totalComments = localComments.length;
  commentsTotalCount.textContent = totalComments;
  renderModal(currentPhoto);
  bigPictureCancelButton.addEventListener('click', onBigPictureCancelClick);
  document.addEventListener('keydown', onEscKeyDown);
};

commentsLoaderButton.addEventListener('click', () => {
  renderComments();
});

const init = (dataArr) => {
  picturesList.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if(currentPicture) {
      const currentPhoto = dataArr.find((photo) => photo.id === Number(currentPicture.dataset.pictureId));
      openBigPicture(currentPhoto);
    }

  });
};

export { init };
