import { Calculator } from './method-chain';

let calc = new Calculator();
let result = calc.add(1).add(2).multiply(3).multiply(4);
console.log(result);

// 여기까지가.. 타입스크립트를 활용한 함수의 기본 타입 정의!!
// 변수, 객체, 함수타입
