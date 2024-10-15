import { isEscapeKey } from '../utils/utils.js';

const COMMENTS_STEP = 5;

const picturesList = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const bigPictureCancelButton = bigPictureContainer.querySelector('.big-picture__cancel');
const commentsCaption = bigPictureContainer.querySelector('.social__caption');
const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img').querySelector('img');
const likesCount = bigPictureContainer.querySelector('.likes-count');
const socialComments = bigPictureContainer.querySelector('.social__comments');
const socialCommentTemplate = socialComments.querySelector('.social__comment');
const commentsTotalCount = document.querySelector('.social__comment-total-count');
const commentsShownCount = document.querySelector('.social__comment-shown-count');
const commentsLoaderButton = document.querySelector('.comments-loader');

let localComments;
let renderedComments = 0;
let totalComments;

const closeBigPicture = () => {
  bigPictureContainer.classList.add('hidden');
  document.body.classList.remove('modal-open');
  bigPictureCancelButton.removeEventListener('click', modalCloseButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

function modalCloseButtonClickHandler() {
  closeBigPicture();
}

function documentKeydownHandler() {
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
  bigPictureCancelButton.addEventListener('click', modalCloseButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
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
