import axios from 'axios';

const url = 'http://localhost:4967/api/v1/pymo/message';

const $inputName = document.querySelector('.input-name');
const $inputMsg = document.querySelector('.input-msg');

const post = async () => {
  const name = $inputName.value;
  const contents = $inputMsg.value;
  const time = new Date().valueOf();

  const res = await axios.post(url, {name, contents, time});
};

const get = async () => {
  const {data: messages} = await axios.get(url);

  return messages;
}

export default {
  post,
  get
}