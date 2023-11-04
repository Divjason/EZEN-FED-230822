// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// function bgChange() {
//   const rndCol =
//     "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//   document.body.style.backgroundColor = rndCol;
// }
// bgChange();

var num = 10;
console.log(num);

var num = 20;
console.log(num);

let num01 = 10;
console.log(num01);

let num02 = 20;
console.log(num02);

num01 = 30;
console.log(num01);

// 상수(*변하지 않을 값, 고정된 값) 를 선언하고자 할 때
const num03 = 10;
console.log(num03);

// num03 = 50;
// console.log(num03);

// 변수의 호이스팅!!!
var x = 20;
var sum = x + y;
var y = 20;
console.log(sum);
