const RENDER_DELAY = 500;

const isEscapeKey = (evt) => evt.key === 'Escape';


const debounce = (callback, timeoutDelay = RENDER_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const shuffleArray = (items) => {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
};

export {shuffleArray, isEscapeKey, debounce};


