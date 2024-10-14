const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_STEP = 25;
const DEFAULT_VALUE = MAX_SCALE;
const PERCENT = 0.01;

const buttonZoomOut = document.querySelector('.scale__control--smaller');
const buttonZoomIn = document.querySelector('.scale__control--bigger');
const previewPhoto = document.querySelector('.img-upload__preview img');
const controlInput = document.querySelector('.scale__control--value');

let currentScale = DEFAULT_VALUE;

const updateScale = () => {
  previewPhoto.style.transform = `scale(${currentScale * PERCENT})`;
  controlInput.value = `${currentScale}%`;
};

const buttonZoomOutClickHandler = () => {
  currentScale = Math.max(currentScale - SCALE_STEP, MIN_SCALE);
  updateScale();
};

const buttonZoomInClickHandler = () => {
  currentScale = Math.min(currentScale + SCALE_STEP, MAX_SCALE);
  updateScale();
};

buttonZoomOut.addEventListener('click', buttonZoomOutClickHandler);
buttonZoomIn.addEventListener('click', buttonZoomInClickHandler);

const resetPhotoScale = () => {
  currentScale = DEFAULT_VALUE;
  updateScale();
};

export { resetPhotoScale };
