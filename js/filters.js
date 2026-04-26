import { renderPics } from './render-pics.js';
import { getRandomNumber, debounce } from './utils.js';

const RANDOM_SORT_COUNT = 10;
const TIMEOUT_DELAY = 500;

const filterButtons = document.querySelectorAll('.img-filters__button');

const defaultFilter = document.querySelector('#filter-default');
let activeFilter = defaultFilter;

const filters = {
  'filter-default': (photos) => photos,
  'filter-random': (photos) => {
    const randomIndexes = new Set();
    const count = Math.min(RANDOM_SORT_COUNT, photos.length);
    while (randomIndexes.size < count) {
      const randomIndex = getRandomNumber(0, photos.length - 1);
      randomIndexes.add(randomIndex);
    }
    const randomPhotos = [];
    randomIndexes.forEach((i) => randomPhotos.push(photos[i]));
    return randomPhotos;
  },
  'filter-discussed': (photos) => [...photos].sort(
    (a, b) => b.comments.length - a.comments.length
  ),
};

const setActiveFilter = (newFilter) => {
  activeFilter.classList.remove('img-filters__button--active');
  newFilter.classList.add('img-filters__button--active');
  activeFilter = newFilter;
};

const onClickSort = ({target}, photos) => {
  const initialState = photos;
  const { id } = target;
  let filteredPhotos = initialState;
  if (id === activeFilter.id) {
    return null;
  } else if (id === defaultFilter.id) {
    setActiveFilter(target);
    filteredPhotos = initialState;
  } else {
    setActiveFilter(target);
    filteredPhotos = filters[id](initialState);
  }
  const debouncedRenderPics = debounce(renderPics, TIMEOUT_DELAY);
  debouncedRenderPics(filteredPhotos);
};
const filter = (data) => filterButtons.forEach((button) =>
  button.addEventListener('click', (evt) => onClickSort(evt, data))
);

export {
  filter,
};
