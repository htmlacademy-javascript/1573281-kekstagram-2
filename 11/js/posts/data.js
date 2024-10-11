import {getData} from '../utils/api.js';
import {renderPhotos} from './thumbnails.js';
import {init as initModal} from './modal.js';
import {renderError} from '../utils/alerts.js';

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');

const uploadPosts = (data) => {
  renderPhotos(data);
  initModal(data);
};

const showError = () => renderError(dataError);

const initPosts = () => getData(uploadPosts, showError);

export {initPosts};
