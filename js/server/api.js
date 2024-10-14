const GET_DATA_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/data';
const SEND_DATA_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/';

const getData = (onSuccess, onFail) => {
  fetch(GET_DATA_URL)
    .then((response) => response.json())
    .then((result) => onSuccess(result))
    .catch(() => onFail());
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SEND_DATA_URL, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onFail();
    })
    .catch(() => onFail());
};

export {getData, sendData};

