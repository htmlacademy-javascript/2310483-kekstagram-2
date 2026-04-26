import {onModalClose, onModalOpen} from './upload-modal.js';
import {renderPics} from './render-pics.js';
import {getPhotos} from './api.js';
import {filter} from './filters.js';

onModalOpen();
onModalClose();
getPhotos().then((data) => {
  if (!data) {
    return;
  }
  document.querySelector('.img-filters').style.opacity = '1';
  renderPics(data);
  filter(data);
});
