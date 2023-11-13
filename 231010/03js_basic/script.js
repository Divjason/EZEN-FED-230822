let today = new Date();
let nowMonth = today.getMonth() + 1;
let nowDate = today.getDate();
let nowDay = today.getDay();

console.log(nowMonth);
console.log(nowDate);
console.log(nowDay);

document.write("<h1>오늘 날짜 정보</h1>");
document.write(`현재 월: ${nowMonth}월 <br />`);
document.write(`현재 일: ${nowDate}일`);
