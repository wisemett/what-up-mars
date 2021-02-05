const setDday = (year, month, day) => {
  const target = new Date(year, month, day);
  const today = new Date();

  const dYear = target.getFullYear() - today.getFullYear() - 1;
  const dMonth = 12 - today.getMonth() - 1;
  const dDay = 31 - today.getDay();
  const dHour = 24 - today.getHours() - 1;
  const dMinutes = 60 - today.getMinutes() - 1;
  const dSeconds = 60 - today.getSeconds() - 1;

  return {
    dYear,
    dMonth,
    dDay,
    dHour,
    dMinutes,
    dSeconds
  };
}

export default setDday;