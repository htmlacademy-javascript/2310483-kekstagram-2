import { showGetPhotosError, showPostErrorMessage } from './messages';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const getPhotos = () => fetch(`${BASE_URL}/data`, {method: 'GET'})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} — ${response.statusText}`);
    }
    return response.json();
  })
  .catch((e) => {
    showGetPhotosError();
    console.error('Error: ', e);
  });

const postPhoto = (form) => fetch(BASE_URL, {method: 'POST', body: new FormData(form)})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} — ${response.statusText}`);
    }
    return response.ok;
  })
  .catch((e) => {
    showPostErrorMessage();
    console.error('Error: ', e);
  });

export { getPhotos, postPhoto };
