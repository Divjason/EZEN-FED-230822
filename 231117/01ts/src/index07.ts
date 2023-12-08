// 실행문 방식으로 함수를 표현!!
// C언어
// CPU에서 실행된 함수의 코드결과값을 자동으로 알려주지 않는 방식
const arrow1 = (a: number, b: number) => {
  return a + b;
};

// 표현식문 방식!!
// 타입스크립트 & 자바스크립트
// CPU에서 실행된 함수의 결과값을 알아서 자동으로 알려준다
// 굳이 return문을 사용하지 않아도 결과값을 반환!
const arrow2 = (a: number, b: number) => a + b;

let x = 10;
if (x > 0) x = 1; // 자바스크립트의 표현식문

let a = 1;
let b = 5;

if (a > b) console.log(a);
else console.log(b);
