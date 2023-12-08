// let age = prompt("당신의 나이를 알려주세요!", "0");
// if (age >= 20) {
//   document.write("😍당신은 성인입니다!");
// } else {
//   document.write("😂당신은 미성년자입니다!");
// }

let today = new Date();
let currentYear = today.getFullYear();
let birthYear = prompt("태어난 년도를 입력하세요!");
let age = currentYear - birthYear + 1;

document.write(`당신의 나이는 ${age}세 입니다. 부럽~`);
