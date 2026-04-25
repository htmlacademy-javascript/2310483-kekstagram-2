import {onModalClose, onModalOpen} from './upload-modal.js';
import {renderPics} from './render-pics.js';
import {getPhotos} from './api.js';

onModalOpen();
onModalClose();
getPhotos().then((data) => renderPics(data));
