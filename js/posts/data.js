import {getData} from '../utils/api.js';
import {renderError} from '../utils/alerts.js';
import { initPostsFilters } from './filter.js';

const dataError = document.querySelector('#data-error').content.querySelector('.data-error');

const showError = () => renderError(dataError);

const initPosts = () => getData(initPostsFilters, showError);

export {initPosts};
