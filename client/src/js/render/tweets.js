import getTweets from '../axios/tweets';

const $elonContainer = document.querySelector('.elon-twitter__container');
const $spaceContainer = document.querySelector('.space-twitter__container');
const $elonUserInfo = document.querySelector('.elon-tweet-prof__container');
const $spaceUserInfo = document.querySelector('.space-tweet-prof__container');

const renderTweets = async () => {
  const twitterData = await getTweets();

  renderUserInfo(twitterData);
  renderTweetContents(twitterData);
};

const renderUserInfo = (data) => {
  $elonUserInfo.innerHTML = `
    <div class="tweet-prof-elon-img"></div>
    <div class="tweet-profile">
      <span class="tweet-prof__name">${data.elonInfo.name}</span>
      <span class="tweet-prof__username">@${data.elonInfo.username}</span>
    </div>
    <span class="tweet-prof-desc">${data.elonInfo.description}</span>
    <div class="tweet-line">Tweets</div>
  `;
  $spaceUserInfo.innerHTML = `
    <div class="tweet-prof-space-img"></div>
    <div class="tweet-profile">
      <span class="tweet-prof__name">${data.spaceInfo.name}</span>
      <span class="tweet-prof__username">@${data.spaceInfo.username}</span>
    </div>
    <span class="tweet-prof-desc">${data.spaceInfo.description}</span>
    <div class="tweet-line">Tweets</div>
  `;
};

const renderTweetContents = (data) => {
  $elonContainer.innerHTML += [...data.elonTweets]
    .map(
      (tweet) => `<li class="tweet-item">
    <div class="tweet-contents__container">
      <div class="tweet-contents-elon-img"></div>
      <div class="tweet-contents-item">
        <div class="tweet-contents-profile">
          <span class="tweet-prof__name">${data.elonInfo.name}</span>
          <span class="tweet-prof__username">@${data.elonInfo.username}</span>
        </div><div class="tweet-contents">${tweet.text}</div>`
    )
    .join('');
  $elonContainer.innerHTML += `</div></div></li>`;

  $spaceContainer.innerHTML += [...data.spaceTweets]
    .map(
      (tweet) => `<li class="tweet-item">
    <div class="tweet-contents__container">
      <div class="tweet-contents-space-img"></div>
      <div class="tweet-contents-item">
        <div class="tweet-contents-profile">
          <span class="tweet-prof__name">${data.spaceInfo.name}</span>
          <span class="tweet-prof__username">@${data.spaceInfo.username}</span>
        </div><div class="tweet-contents">${tweet.text}</div>`
    )
    .join('');
  $elonContainer.innerHTML += `</div></div></li>`;
};

export default renderTweets;
