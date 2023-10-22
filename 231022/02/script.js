// JS 내장함수 => 시간함수 Date(), Object() 등등
// 시간관련 특별한 함수
// setInterval(), clearInterval(), setTimeout()
// setInterval() : 일정한 시간 간격으로 어떠한 코드를 반복해서 실행하고자 할 때 사용!
// clearInterval() : setInterval() 함수를 취소할 때!
// setTimeout() : 일정 시간 후에 코드를 실행시킬 때

// JS

// let addNum = 0;
// let subNum = 1000;
// let addNum01 = 0;

// let auto_3 = setTimeout(() => {
//   addNum01++;
//   console.log(addNum01);
// }, 5000);

// let auto_1 = setInterval(() => {
//   addNum++;
//   console.log(`addNum: ${addNum}`);
// }, 3000);

// let auto_2 = setInterval(() => {
//   subNum--;
//   console.log(`subNum: ${subNum}`);
// }, 3000);

/*
1.시/분/초의 시간단위를 증가시킨다!!
2.if조건문을 사용해서 초/분/시간 단위에 맞춰서 증가!!
3.시/분/초를 웹브라우저에 출력시킬 수 있도록 공간 정의!!
*/

const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const clock = () => {
  const now = new Date();

  let newHour = now.getHours();
  newHour = newHour < 10 ? `0${newHour}` : `${newHour}`;
  hour.innerText = newHour;

  let newMin = now.getMinutes();
  newMin = newMin < 10 ? `0${newMin}` : `${newMin}`;
  min.innerText = newMin;

  let newSec = now.getSeconds();
  newSec = newSec < 10 ? `0${newSec}` : `${newSec}`;
  sec.innerText = newSec;
};

setInterval(clock, 1000);
