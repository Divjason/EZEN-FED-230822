// 전역(Global)변수 & 지역(Local)변수 & 블록(Block)변수

// function sum(a, b) {
//   let result = a + b;
// }

// console.log(result);

// let hi = "hello";

// function greeting() {
//   console.log(hi);
// }

// greeting();

// let hi = "hello";

// function change() {
//   hi = "bye";
// }

// console.log(hi);
// change();
// console.log(hi);

const factor = 5;

function calc(num) {
  return num * factor;
}

{
  let result = calc(10);
  document.write(`result : ${result}`);
}
