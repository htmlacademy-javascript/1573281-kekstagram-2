const commentsLoad = () => {
  const commentsList = document.querySelector('.social__comments'); // ul, внутри которого все комментарии
  const commentsLoader = document.querySelector('.comments-loader'); // кнопка "загрузить еще"
  const totalComments = commentsList.children.length; // сколько всего комментариев
  const commentsToShow = 5; // сколько показывать
  let currentIndex = 0;


  // Функция для отображения следующей порции комментариев
  function showNextComments() {
    const commentsTotalCount = document.querySelector('.social__comment-total-count');
    const commentsShowCount = document.querySelector('.social__comment-shown-count');
    const comments = commentsList.children;
    const endIndex = Math.min(currentIndex + commentsToShow, totalComments);
    commentsLoader.style.display = 'block';
    commentsTotalCount.textContent = totalComments; // показываем общее количество комментариев
    for (let i = currentIndex; i < endIndex; i++) {
      comments[i].style.display = 'flex'; // или 'block', если это блоковые элементы
    }

    currentIndex = endIndex;
    commentsShowCount.textContent = currentIndex;
    // Если все комментарии показаны, скрыть кнопку
    if (currentIndex >= totalComments) {
      commentsLoader.style.display = 'none';
    }
  }

  // Изначально показываем первые комментарии
  Array.from(commentsList.children).forEach((comment, index) => {
    if (index >= commentsToShow) {
      comment.style.display = 'none'; // Скрыть все комментарии кроме первых 5
    }
  });

  // Добавляем обработчик клика на кнопку
  commentsLoader.addEventListener('click', showNextComments);

  // Показываем первую порцию комментариев
  showNextComments();
};

export {commentsLoad};

