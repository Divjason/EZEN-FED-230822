import { NumberToNumberFunc, add } from './add';

let fn: NumberToNumberFunc = add(1);
let result = fn(2);

console.log(result);
console.log(add(1)(2));

const multiply02 = (a: number) => (b: number) => (c: number) => a * b * c;

// JS 함수 : 프로그래밍언어 보기드문 1급시민
// 함수 매개변수 / 반환값 / 변수에 할당!!
// JS 고차함수
