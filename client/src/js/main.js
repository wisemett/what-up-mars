import renderDday from './render/d-day';
import renderWeather from './render/weather';
import renderPictures from './render/pictures';
import renderTweets from './render/tweets';
import renderMessage from './render/message';
import observe from './utils/intersection-observer';

renderDday(2030, 1, 1);
renderWeather();
renderPictures();
renderTweets();
renderMessage();
observe();