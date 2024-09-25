const commentsLoader = () => {
  const commentsList = document.querySelector('.social__comments');
  const commentsLoaderButton = document.querySelector('.comments-loader');
  const commentsTotalCount = document.querySelector('.social__comment-total-count');
  const commentsShowCount = document.querySelector('.social__comment-shown-count');
  const totalComments = commentsList.children.length;
  const commentsToShow = 5;
  let currentIndex = 0;


  // Функция для отображения следующей порции комментариев
  const showNextComments = () => {
    const comments = commentsList.children;
    const endIndex = Math.min(currentIndex + commentsToShow, totalComments);
    commentsLoaderButton.style.display = 'block';
    commentsTotalCount.textContent = totalComments;
    for (let i = currentIndex; i < endIndex; i++) {
      comments[i].style.display = 'flex';
    }
    currentIndex = endIndex;
    commentsShowCount.textContent = currentIndex;
    // Если все комментарии показаны, скрыть кнопку
    if (currentIndex >= totalComments) {
      commentsLoaderButton.style.display = 'none';
    }
  };
  // Изначально показываем первые комментарии
  Array.from(commentsList.children).forEach((comment, index) => {
    if (index >= commentsToShow) {
      comment.style.display = 'none';
    }
  });
  commentsLoaderButton.addEventListener('click', showNextComments);
  showNextComments();
};

export {commentsLoader};

