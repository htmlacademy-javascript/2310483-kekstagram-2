import './utils.js';
import {PHOTOS_COUNT} from './data.js';
import {generateFakeDataArray} from './fake-data.js';
import './upload-modal.js';
import './functions.js';
import {renderPics} from './render-pics.js';

const data = generateFakeDataArray(PHOTOS_COUNT);
renderPics(data);
