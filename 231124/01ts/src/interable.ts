// JS에서 이터러블객체 학습 => TS 이터러블객체 & 제너레이터 함수
// JS => 이터러블객체 & 제너레이터 함수 사용 복습 & 심볼!!!
// TS

// JS 심벌!!! => 객체를 생성하는데 있어서 유일한 객체 프로퍼티 키를 만들고 관리하고 싶을 때!!

let var1 = Symbol();
let var2 = Symbol();

let result = var1 === var2;
console.log(result);

let id = Symbol();

interface obj {
  name: string;
  [x: symbol]: number | string;
}

const member: obj = {
  name: 'Park',
  [id]: 12345,
};

console.log(member[id]);

let grade = Symbol('grade');
member[grade] = 'VIP';

console.log(member);
