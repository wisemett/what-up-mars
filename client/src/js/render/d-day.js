import setdDay from '../utils/set-d-day';
import countDday from '../utils/count-d-day';

const $dDay = document.querySelector('.d-day');
const $dDate = document.querySelector('.d-date');

const renderDday = (year, month, day) => {
  const dDay = setdDay(year, month, day);

  setInterval(() => {
    // 카운트
    const countedDday = countDday(dDay);

    $dDay.textContent = `${countedDday.dYear}y ${countedDday.dMonth}m ${countedDday.dDay}d`;
    $dDate.textContent = `${countedDday.dHour}:${countedDday.dMinutes}:${countedDday.dSeconds}`;
  }, 1000);
}

export default renderDday;