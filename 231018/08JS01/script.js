//JS 싱글 스레드 프로그래밍 언어!!!
//한번에 하나의 명령문만 실행시킬 수 있다!!
//순차적으로 명령어를 읽고 해석 실행
//부작용 : 먼저 읽고, 실행하고자 하는 코드 heavy(*복잡한 연산작업)하다고 한다면, 해당 코드 뒤에 기다리고 있는 (대기하고 있는 코드) 코드는 실행하지도 못하고 계속 기다려야한다!!
//내장함수

//setInterval 일정 시간마다 반복할 수 있게 하는 함수
//clearInterval setInterval의 반복실행을 멈추게 하는 함수
//setTimeout 일정 시간이 지난 후에 실행하게 하는 함수

// function greeting() {
//   console.log("안녕하세요!");
// }

// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

let counter = 0;

let timer = setInterval(() => {
  console.log("안녕하세요!");
  counter++;
  if (counter === 5) {
    clearInterval(timer);
  }
}, 2000);

setTimeout(() => {
  console.log("기다려주세요!");
}, 3000);
