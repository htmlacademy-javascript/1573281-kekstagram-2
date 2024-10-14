const usersPictureTepmplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesList = document.querySelector('.pictures');
const picturesListFragment = document.createDocumentFragment();

const renderPhotos = (data) => {
  data.forEach(({id, url, description, likes, comments})=>{
    const userPicture = usersPictureTepmplate.cloneNode(true);
    const image = userPicture.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    userPicture.dataset.pictureId = id;
    userPicture.querySelector('.picture__likes').textContent = likes;
    userPicture.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(userPicture);
  });

  return picturesList.appendChild(picturesListFragment);
};

export {renderPhotos};

