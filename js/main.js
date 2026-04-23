import {} from './utils.js';
import {PHOTOS_COUNT} from './data.js';
import './form-validation.js';
import {generateFakeDataArray} from './fake-data.js';
import {onModalClose, onModalOpen} from './upload-modal.js';
import {} from './functions.js';
import {renderPics} from './render-pics.js';

onModalOpen();
onModalClose();
const data = generateFakeDataArray(PHOTOS_COUNT);
renderPics(data);
