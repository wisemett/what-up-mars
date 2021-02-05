const timeFormat = time => (time + '').length <= 1 ? '0'+time : time;

const getMaxTime = idx => {
  // 59초, 59분, 23시, 31일, 12월, 0년
  if (idx === 0 || idx === 1) return 59;
  else if (idx === 2) return 23;
  else if (idx === 3) return 31;
  else if (idx === 4) return 12;
  else return 0;
};


const countDday = dDay => {
  const times = Object.values(dDay).reverse();
  let isZero = true;

  let countedTimes = times.map((time, idx) => {
    if (isZero) {
      if (time - 1 < 0) return getMaxTime(idx);
      isZero = false;
      return time - 1;
    }
    return time;
  }).reverse();
  
  countedTimes = countedTimes.map(timeFormat);

  Object.keys(dDay).forEach((key, idx) => {
    dDay[key] = countedTimes[idx];
  });

  return dDay;
};

export default countDday;
