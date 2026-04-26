const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imagePreviewWrapper = document.querySelector('.img-upload__preview');
const imagePreview = imagePreviewWrapper.querySelector('img');

const setUploadImage = (file) => {
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if(matches) {
    imagePreview.src = URL.createObjectURL(file);
  }
};

export {
  setUploadImage,
};
