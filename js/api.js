import { showGetPhotosError, showPostErrorMessage } from './messages.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const getPhotos = () => fetch(`${BASE_URL}/data`, {method: 'GET'})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} — ${response.statusText}`);
    }
    return response.json();
  })
  .catch(() => {
    showGetPhotosError();
  });

const postPhoto = (form) => fetch(`${BASE_URL}/`, {method: 'POST', body: new FormData(form)})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} — ${response.statusText}`);
    }
    return response.ok;
  })
  .catch(() => {
    showPostErrorMessage();
  });

export { getPhotos, postPhoto };
