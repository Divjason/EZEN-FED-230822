// JS 세계관 => 이터러블 객체!!
// 이터러블 객체 : Iterable Object
// 객체 안에 담겨있는 아이템을 순서대로 처리할 수 있는 객체
// 이터러블 객체가 되기 위해서는 다음 조건을 충족!!!
// 1) for of 반복문 사용할 수 있어야 한다!!
// 2) 전개 연산자를 사용할 수 있어야 한다!!
// 3) 구조분해할당 가능해야 한다!!
// 그래서 JS 세계관에서 대표적인 이터러블 객체 => 배열객체

// let arr01 = [1, 2, 3, 4, 5];
// let arr02 = [1, 2, 3, 4, 5];
// let result = [...arr01, ...arr02];
// let [a, b] = arr02;

// for (let a of arr01) {
//   console.log(a);
// }

// let arr = [1, 2, 3, 4, 5];

// 위에서 살펴본 배열 및 문자열로 대표되는 이터러블 객체가 한정적이다 보니, 2015년 ES6문법 이후부터 제너레이터 함수를 사용해서 태생이 이터러블 객체가 아니더라도 해당 객체를 이터러블하게 만들 수 있게 되었음!!!

// 일반적인 함수생성방법
function fnc() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}

fnc();

// 제너레이터 함수생성방법
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

let g1 = gen();
console.log(g1);

let g2 = gen();
for (let i of g2) {
  console.log(i);
}

// <정말 중요!!!>
// 배열 변칙성 메서드 : map() / filter() / reduce()
// JS 내장객체 : Map(), Set()
// 이터러블 객체
// 이터레이터 객체
// 제너레이터 함수
