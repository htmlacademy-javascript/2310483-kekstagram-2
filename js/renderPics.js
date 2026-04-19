const template = document.getElementById('picture').content;

const renderPics = (photos) => {
  const picturesContainer = document.querySelector('.pictures');
  photos.forEach((item) => {
    const {url, description, likes: likesCount, comments} = item;
    const picture = template.cloneNode(true);
    const image = picture.querySelector('.picture__img');
    const likes = picture.querySelector('.picture__likes');
    const commentsCount = picture.querySelector('.picture__comments');
    image.src = url;
    image.alt = description;
    likes.textContent = likesCount;
    commentsCount.textContent = comments.length;
    picturesContainer.appendChild(picture);
  });
};

export {renderPics};
