import makeInsightObject from '../axios/weather';

// DOM 요소
const $solDate = document.querySelector('.weather__content__date__sol');
const $earthDate = document.querySelector('.weather__content__date__earth');
const $highPressure = document.querySelector(
  '.weather__content__pressure__high'
);
const $lowPressure = document.querySelector('.weather__content__pressure__low');
const $highTemperature = document.querySelector(
  '.weather__content__temperature__high'
);
const $lowTemperature = document.querySelector(
  '.weather__content__temperature__low'
);
const $highWindSpeed = document.querySelector(
  '.weather__content__wind-speed__high'
);
const $lowWindSpeed = document.querySelector(
  '.weather__content__wind-speed__low'
);

const renderWeather = async () => {
  const {
    solDate,
    earthDate,
    highPressure,
    lowPressure,
    highTemperature,
    lowTemperature,
    highWindSpeed,
    lowWindSpeed,
  } = await makeInsightObject();

  $solDate.textContent = solDate;
  $earthDate.textContent = earthDate;
  $highPressure.textContent = highPressure;
  $lowPressure.textContent = lowPressure;
  $highTemperature.textContent = highTemperature;
  $lowTemperature.textContent = lowTemperature;
  $highWindSpeed.textContent = highWindSpeed;
  $lowWindSpeed.textContent = lowWindSpeed;
};

export default renderWeather;
