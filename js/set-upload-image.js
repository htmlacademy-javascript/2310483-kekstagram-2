const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imagePreviewWrapper = document.querySelector('.img-upload__preview');
const imagePreview = imagePreviewWrapper.querySelector('img');
const effectsPreviews = document.querySelectorAll('.effects__preview');

const setUploadImage = (file) => {
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  const urlObject = URL.createObjectURL(file);

  if(matches) {
    imagePreview.src = urlObject;
    effectsPreviews.forEach((item) => {
      item.style.backgroundImage = `url(${urlObject})`;
    });
  }
};

export {
  setUploadImage,
};
