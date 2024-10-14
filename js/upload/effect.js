import { effects } from '../constans/constans.js';

const previewPhoto = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const sliderInput = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');

const setSliderEffect = (value) => effects()[value] || effects().default;

const setSliderStatus = (effect) => sliderContainer.classList.toggle('hidden', effect === effects().default);

const updateSlider = (effect) => {
  slider.noUiSlider.off();
  slider.noUiSlider.on('update', () => {
    sliderInput.value = +slider.noUiSlider.get();
    previewPhoto.style.filter = (effect === effects().default)
      ? null : `${effect.filter}(${sliderInput.value}${effect.unit})`;
  });
};

const createSlider = (value) => {
  const effect = setSliderEffect(value);
  setSliderStatus(effect);
  noUiSlider.create(slider, {
    range: {
      min: effect.range.min,
      max: effect.range.max,
    },
    start: effect.start,
    step: effect.step,
    connect: 'lower',
  });
  updateSlider(effect);
};

const updateSliderOptions = (value) => {
  const effect = setSliderEffect(value);
  setSliderStatus(effect);
  slider.noUiSlider.updateOptions({
    range: {
      min: effect.range.min,
      max: effect.range.max,
    },
    start: effect.start,
    step: effect.step,
  });
  updateSlider(effect);
};

export {createSlider, updateSliderOptions};
