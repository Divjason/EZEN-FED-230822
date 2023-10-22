// let id = Symbol();

// const member = {
//   name: "kim",
//   [id]: 12345,
// };

//* 엄격한 자료형
// int name = 20
// char *name = "Jhon"

//* 느슨한 자료형
// let one = "20";
// let two = 10;
// let sum = one + two;
// let sum01 = one - two;

// let userInput = parseFloat(prompt("아무 숫자나 입력하세요!"));

let fah = parseFloat(prompt("변환할 화씨온도를 입력해주세요!"));
let cel = ((fah - 32) / 1.8).toFixed(1);
document.write(`화씨 ${fah}도는 섭씨 ${cel}도 입니다.`);
