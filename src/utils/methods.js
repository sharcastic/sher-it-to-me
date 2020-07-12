import { monthNames } from '../constants';

const addZero = num => (num < 10 ? `0${num}` : num);

export const getTimeAndDate = dateString => {
  const date = new Date(dateString);
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const dd = date.getDate();
  const day = dd / 10 < 1 ? `0${dd}` : dd;
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return [`${addZero(hours)}:${addZero(minutes)}`, `${day} ${month} ${year}`];
};
