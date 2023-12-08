// JS는 동기 / 비동기!!!
// 동기 : 한번에 하나씩 무언가를 처리
// 1차선
// 비동기 : 한번에 하나씩해야하는 일들을 동시에 여러개를 진행할 수 있는 것처럼 만들어주는 방식
// 커피숍 키오스크 & 바리스타
// A : 아메리카노 (*키오스크)
// 바리스타 : 아메리카노 & 바닐라라떼
// B : 바닐라라떼 (*키오스크)
// C : 카페라떼 (*키오스크)

// 기본적인 JS 동기처리방식

// function displayA() {
//   console.log('A');
// }
// function displayB() {
//   console.log('B');
// }
// function displayC() {
//   console.log('C');
// }

// displayA();
// displayB();
// displayC();

// function displayA() {
//   console.log('A');
// }
// function displayB() {
//   setTimeout(() => {
//     console.log('B');
//   }, 2000);
// }
// function displayC() {
//   console.log('C');
// }

// displayA();
// displayB();
// displayC();

function displayA() {
  console.log('A');
}
function displayB(callback) {
  setTimeout(() => {
    console.log('B');
    callback();
  }, 2000);
}
function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);

// JS의 대표적인 비동기 처리방식 : 콜백함수!!!!
// 콜백지옥 => 함수 => 함수 => 함수 => 코드 문제!!!! (*문제점 발생 지점)
// 프로미스 (*ES6 2015년) / async, await (ES8 2017년)
