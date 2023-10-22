/*
function 함수명(매개변수 (*선택적) => 인수 혹은 인자값) {
  함수 실행문
}
*/

/*
변수명, 함수명 => 카멜표기법, 스네이크표기법, 헝가리언표기법
calcSum(), calc_sum(), Calcsum()
*/

// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//   }
//   console.log(`1부터 10까지 더하면 ${sum} 입니다.`);
// }

// calcSum();

//*함수선언 => 함수호출 => 함수실행

//*매개변수가 존재하는 함수 선언!!!

// function sum(a, b) {
//   let result = a + b;
//   alert(`두 수의 합 : ${result}`);
// }

// sum(1, 2);

// 디버깅!!! & 버그발생
// Trouble Shooting 경험유무!!!

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}입니다.`);
}

calcSum(10);

// let num = parseInt(prompt("몇 까지 더할까요?"));

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// document.write(`1부터 ${num}까지 더하면 ${calcSum(num)}`);

// let num1 = parseInt(prompt("첫번째 숫자를 입력해주세요!"));
// let num2 = parseInt(prompt("두번째 숫자를 입력해주세요!"));

// function multiple(a, b) {
//   return a * b;
// }

// let result = multiple(num1, num2);

// console.log(`두 수를 곱한 결과는 ${result}입니다.`);

// function multiple(a, b = 5, c = 10) {
//   return a * b + c;
// }

// console.log(multiple(2, 4, 8));
// console.log(multiple(2, 4));
