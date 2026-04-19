import './utils.js';
import {PHOTOS_COUNT} from './data.js';
import {generateFakeDataArray} from './fakeData.js';
import './uploadModal.js';
import './functions.js';
import {renderPics} from './renderPics.js';

const photos = generateFakeDataArray(PHOTOS_COUNT);
renderPics(photos);
