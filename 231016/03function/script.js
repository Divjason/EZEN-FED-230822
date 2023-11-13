// let sum01 = {
//   name: "park",
// };

// let sum = function (a, b) {
//   return a + b;
// };

// console.log(`함수 실행 결과: ${sum(10, 20)}`);

//즉시 실행함수
// (function (a, b) {
//   let sum = a + b;
//   console.log(`함수 실행 결과: ${sum}`);
// })(100, 200);

// 화살표함수!!!
// let hi = () => `안녕하세요!`;
// console.log(hi());

// let multiple = (a, b) => a * b;
// console.log(`두 수를 곱한 결과는 ${multiple(10, 20)}입니다.`);

// 콜백함수 (*Call Back : cb)
const btn = document.querySelector("button");
function display() {
  alert("클릭했습니다.");
}

btn.addEventListener("click", display);
