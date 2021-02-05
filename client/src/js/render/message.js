import message from '../axios/message';

const $msgList = document.querySelector('.cheer__list');
const $submitBtn = document.querySelector('.submit-msg');

let messages = [];

const watchPost = async e => {
  e.preventDefault();
  await message.post();
  renderMessage();
};

const renderMessage = async () => {
  const res = await message.get();
  messages = [...res];

  messages = messages.map(({name, contents, time}) => {
    const fTime = formatTime(time);
    return {name, contents, fTime};
  });
  
  $msgList.innerHTML = '';
  messages.forEach(msg => {
    $msgList.innerHTML += `
    <li class="cheer__item">
      <div class="profile-img"></div>
        <div class="user-info">
          <span class="user-name">${msg.name}</span>
          <span class="user-contents">${msg.contents}</span>
        </div>
      <span class="cheer-time">${msg.fTime.year}-${msg.fTime.month}-${msg.fTime.day}</span>
    </li> `
  });
  
  $submitBtn.onclick = watchPost;
  
};

const formatTime = time => {
  const then = new Date(time);

  const year = then.getFullYear();
  const month = then.getMonth();
  const day = then.getDay();

  return {
    year,
    month,
    day
  };
}

export default renderMessage;