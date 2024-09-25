import { renderPhotos } from './thumbnails.js';
import { getImagesArray } from './create-images-array.js';
import { openModal } from './modal.js';

renderPhotos(getImagesArray);
openModal(getImagesArray);

