import { renderPhotos } from './posts/thumbnails.js';
import { getImagesArray } from './posts/create-images-array.js';
import { init as initModal } from './posts/modal.js';
import {initFormAction} from './upload/form.js';


renderPhotos(getImagesArray);
initModal(getImagesArray);
initFormAction();


