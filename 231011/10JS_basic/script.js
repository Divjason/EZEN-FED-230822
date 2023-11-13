/*
1.사용자가 입력한 값을 저장할 변수 정의
2.소수인지 아닌지 판단할 수 있는 연산 정의
3.해당 연산이 끝났을 때, 결과값을 출력할 수 있게 하는 조건문에 대한 정의
*/

const number = parseInt(prompt("자연수를 입력하세요!"));
let isPrime;

if (number === 1) {
  document.write(`${number}은 소수도, 합성수도 아닙니다.`);
} else if (number === 2) {
  isPrime = true;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
}
if (isPrime) {
  document.write(`${number}는 소수입니다!`);
} else {
  document.write(`${number}는 소수가 아닙니다!`);
}
