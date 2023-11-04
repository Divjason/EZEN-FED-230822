/*
const string = prompt("영문 소문자로 된 문자열을 입력하세요!");
const firstCh = string[0].toUpperCase();
const remainCh = string.slice(1);
const result = firstCh + remainCh;
document.write(result);
*/

const string = prompt("영문 소문자로 된 문자열을 입력하세요!");
const result01 = [string[0].toUpperCase(), ...string.slice(1)].join("");
console.log(result01);
document.write(result01);

// JS 문법 어려운것도 있습니다.
// JS 공부하는 학습하는 방법
// JS 문법 > JS 활용 방법
// 클론 코딩!!!!
