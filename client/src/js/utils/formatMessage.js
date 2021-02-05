import moment from 'moment';

const getGap = time => {
  const then = moment(time);
  const now = moment();

  if (now.diff(then, 'years') > 0) return [now.diff(then, 'years'), 'year'];
  else if (now.diff(then, 'months') > 0) return [now.diff(then, 'months'), 'month'];
  else if (now.diff(then, 'days') > 0) return [now.diff(then, 'days'), 'day'];
  else if (now.diff(then, 'hours') > 0) return [now.diff(then, 'hours'), 'hour'];
  else if (now.diff(then, 'minutes') > 0) return [now.diff(then, 'minutes'), 'minute'];
  else return [now.diff(then, 'seconds'), 'seconds'];
};

const formatTime = messages => messages.map(({name, contents, time}) => {
    const fTime = getGap(time);
    return {name, contents, fTime};
  });

export default formatTime;
