import emotion1 from './img/emotion1.png';
import emotion2 from './img/emotion2.png';
import emotion3 from './img/emotion3.png';
import emotion4 from './img/emotion4.png';
import emotion5 from './img/emotion5.png';

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case '1':
      return emotion1;
    case '2':
      return emotion2;
    case '3':
      return emotion3;
    case '4':
      return emotion4;
    case '5':
      return emotion5;
    default:
      return null;
  }
};

export const emotionList = [
  {
    id: 1,
    name: '완전 좋음',
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: '좋음',
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: '그럭저럭',
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: '나쁨',
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: '끔찍함',
    img: getEmotionImgById(5),
  },
];

export const getFormattedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    date = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

export const getMonthRangeByDate = (date) => {
  const todayYear = date.getFullYear();
  const todayMonth = date.getMonth();
  const beginTimeStamp = new Date(todayYear, todayMonth, 1).getTime();
  const endTimeStamp = new Date(
    todayYear,
    todayMonth + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return { beginTimeStamp, endTimeStamp };
};

export const sortOptionList = [
  { value: 'latest', name: '최신순' },
  { value: 'oldest', name: '오래된순' },
];
