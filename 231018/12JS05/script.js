/*
1.시간을 출력할 공간에 대한 정의
2.분을 출력할 공간에 대한 정의
3.초를 출력할 공간에 대한 정의
4.시간, 분, 초를 출력할 공간에 실제 값을 적용
*/

let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let clock = () => {
  const now = new Date();
  hour.innerHTML = now.getHours();
  min.innerHTML = now.getMinutes();
  sec.innerHTML = now.getSeconds();
};

setInterval(clock, 1000);
