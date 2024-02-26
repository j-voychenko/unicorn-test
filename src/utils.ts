export const getReturnValues = (timer: number) => {
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timer % (1000 * 60)) / 1000);

  return [minutes, seconds];
};

export const formatSeconds = (seconds: number) => {
  return seconds < 10 ? `0${seconds}` : `${seconds}`;
};
