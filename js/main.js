import {generateFakeDataArray} from './fake-data.js';
import {onModalClose, onModalOpen} from './upload-modal.js';
import {renderPics} from './render-pics.js';

onModalOpen();
onModalClose();
const data = generateFakeDataArray();
renderPics(data);
