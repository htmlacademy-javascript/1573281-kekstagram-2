import { renderPhotos } from './thumbnails.js';
import { getImagesArray } from './create-images-array.js';
import { init as initModal } from './modal.js';
import {initFormAction} from './upload/form.js';


renderPhotos(getImagesArray);
initModal(getImagesArray);
initFormAction();


