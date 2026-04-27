import { onModalClose, onModalOpen } from './upload-modal.js';
import { renderPics } from './render-pics.js';
import { getPhotos } from './api.js';
import { showFilter } from './filters.js';

onModalOpen();
onModalClose();
getPhotos()
  .then((data) => {
    if (!data) {
      return;
    }
    renderPics(data);
    showFilter(data);
  });
