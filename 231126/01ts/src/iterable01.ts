// iterable : 무언가를 순서대로 처리할 수 있는~
// iterable object : 무언가를 순서대로 처리할 수 있는 객체!!
// JS에서 이터러블 객체 : 배열, 문자열
// 이터러블 객체의 특징 : for of 반복문, 전개연산자(...), 구조분해 할당

const hi = 'hello';

for (let ch of hi) {
  console.log(ch);
}

const chArray = [...hi];
console.log(chArray);

const [ch1, ch2] = hi;
console.log(ch1, ch2);
