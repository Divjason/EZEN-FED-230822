// JS에서 날짜 정보를 가져올 때 사용하는 메서드(*함수) 정리
/*
1.getFullYear() : 연도 정보를 가져올 때 사용
2.getMonth() : 월 정보를 가져올 때 사용 (*단, 현재 월 - 1)
3.getDate() : 일 정보를 가져올 때 사용
4.getDay() : 요일 정보를 가져올 때 사용 (*일:0 ~ 토:6)
5.getHours() : 시간 정보를 가져올 때 사용
6.getMinutes() : 분 정보를 가져올 때 사용
7.getSeconds() : 초 정보를 가져올 때 사용
8.getTime() : 경과된 시간정보를 '밀리초'개념으로 표기함!!
(*1970 / 1 / 1부터 경과된 시간을 밀리초)

1밀리초 = 1/1000초
1초 = 1000밀리초
1분 = 60초 = 60,000밀리초 (60 * 1000)
1시간 = 60분 = 3,600,000밀리초 (60 * 60 * 1000)
1일 = 24시간 = 86,400,000밀리초 (24 * 60 * 60 * 1000)
*/

// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();

// document.write(`<h1>오늘 날짜 정보</h1>`);
// document.write(`현재 월 : ${nowMonth} 월 <br/>`);
// document.write(`현재 일 : ${nowDate} 일 <br/>`);

// let classOpen = new Date(`2023,08,22`);
// let theMonth = classOpen.getMonth() + 1;
// let theDate = classOpen.getDate();

// document.write(`<h1>강의 개강 날짜 정보</h1>`);
// document.write(`현재 월 : ${theMonth} 월 <br/>`);
// document.write(`현재 일 : ${theDate} 일 <br/>`);

let today = new Date();
let nowYear = today.getFullYear();

let theDate = new Date(nowYear, 11, 31);
let diffDate = theDate.getTime() - today.getTime();

let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));
document.write(`연말 D-day : ${result} 일 남았습니다.`);
