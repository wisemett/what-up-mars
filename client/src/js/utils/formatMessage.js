messages.map(({name, contents, time}) => {
  const fTime = formatTime(time);
  return {name, contents, fTime};
});