import {isEscapeKey} from '../utils/utils.js';
import {sendData} from '../server/api.js';
import {renderMessage} from '../utils/alerts.js';
import {validatePristine, setPristine, resetPristine} from './validate.js';
import {resetPhotoScale} from './scale.js';
import {createSlider, updateSliderOptions} from './effect.js';

const SUCCESS_STATUS = 'success';
const ERROR_STATUS = 'error';
const FILE_TYPES = ['.jpg', '.jpeg', '.png', '.webp'];

const uploadInput = document.querySelector('.img-upload__input');
const form = document.querySelector('.img-upload__form');
const formModal = document.querySelector('.img-upload__overlay');
const formCloseButton = document.querySelector('.img-upload__cancel');
const formSubmitButton = document.querySelector('.img-upload__submit');
const effectsControl = document.querySelector('.effects__list');
const checkedEffect = document.querySelector('.effects__radio[checked]');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const previewPhoto = document.querySelector('.img-upload__preview img');
const previewEffects = document.querySelectorAll('.effects__preview');


const openForm = () => {
  formModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  formCloseButton.addEventListener('click', formCloseButtonClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

const closeForm = () => {
  form.reset();
  resetPristine();
  resetPhotoScale();
  updateSliderOptions(checkedEffect.value);
  formModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formCloseButton.removeEventListener('click', formCloseButtonClickHandler);
  document.removeEventListener('keydown', documentKeydownHandler);
};

const setSubmitButtonStatus = (value) => {
  formSubmitButton.disabled = value;
};

const showSuccess = () => {
  closeForm();
  renderMessage(successMessage, SUCCESS_STATUS);
  setSubmitButtonStatus(false);
};

const showError = () => {
  renderMessage(errorMessage, ERROR_STATUS);
  setSubmitButtonStatus(false);
};

function formCloseButtonClickHandler() {
  closeForm();
}

function documentKeydownHandler(evt) {
  const hashtagsInput = evt.target.closest('.text__hashtags');
  const captionInput = evt.target.closest('.text__description');
  const error = document.querySelector('.error');

  if (isEscapeKey(evt) && !hashtagsInput && !captionInput && !error) {
    evt.preventDefault();
    closeForm();
  }
}

function uploadInputChangeHandler(evt) {
  const file = evt.target.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if(matches){
    openForm();
    const src = URL.createObjectURL(file);
    previewPhoto.src = src;
    previewEffects.forEach((previewEffect) => {
      previewEffect.style.backgroundImage = `url(${src})`;
    });
  }
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  if (validatePristine()) {
    setSubmitButtonStatus(true);
    sendData(showSuccess, showError, new FormData(evt.target));
  }
}

function effectsControlChangeHandler(evt) {
  updateSliderOptions(evt.target.value);
}

const initFormAction = () => {
  setPristine();
  createSlider(checkedEffect.value);
  uploadInput.addEventListener('change', uploadInputChangeHandler);
  form.addEventListener('submit', formSubmitHandler);
  effectsControl.addEventListener('change', effectsControlChangeHandler);
};

export {initFormAction};
