import setdDay from '../utils/set-d-day';
import countDday from '../utils/count-d-day';
import makeInsightObject from '../axios/weather';

const $dDay = document.querySelector('.d-day');
const $dDate = document.querySelector('.d-date');
const $solDate = document.querySelector('.sol');

const renderDday = async (year, month, day) => {
  const dDay = setdDay(year, month, day);
  const {solDate} = await makeInsightObject();

  setInterval(() => {
    // 카운트
    const countedDday = countDday(dDay);

    $dDay.textContent = `${countedDday.dYear}y ${countedDday.dMonth}m ${countedDday.dDay}d`;
    $dDate.textContent = `${countedDday.dHour}:${countedDday.dMinutes}:${countedDday.dSeconds}`;
  }, 1000);

  $solDate.textContent = ''+ solDate;
}

export default renderDday;