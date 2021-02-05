import message from '../axios/message';
import formatTime from '../utils/format-message';

const $msgList = document.querySelector('.cheer__list');
const $submitBtn = document.querySelector('.submit-msg');
const $inputName = document.querySelector('.input-name');
const $inputMsg = document.querySelector('.input-msg');

let messages = [];

const watchPost = async (e) => {
  e.preventDefault();
  if (!$inputName.value || !$inputMsg.value) return;

  await message.post();
  $inputName.value = '';
  $inputMsg.value = '';

  renderMessage();
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

const renderMessage = async () => {
  const res = await message.get();
  messages = [...res];

  messages = formatTime(messages);

  $msgList.innerHTML = '';
  messages.forEach((msg) => {
    const randomNum = getRandomInt(0, 6);
    $msgList.innerHTML += `
    <li class="cheer__item">
      <div class="profile-img" style="background-image:url('../../img/profile/${randomNum}.jpg')"></div>
        <div class="user-info">
          <span class="user-name">${msg.name}</span>
          <span class="user-contents">${msg.contents}</span>
        </div>
      <span class="cheer-time">${msg.fTime[0]} ${msg.fTime[1]} ago</span>
    </li> `;
  });

  $submitBtn.onclick = watchPost;
};

export default renderMessage;
