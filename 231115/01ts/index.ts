// 타입스크립트는 자바스크립트 자료 타입을 결정짓는 역할!!!
// 타입주석!!!

let n: number = 1;
let b: boolean = true;
let s: string = 'hello';
let o: object = {};

// n = '1';
// b = 1;
// s = false;

// 타입주석이 없더라도 타입추론!!
// 타입스크립트에서 타입을 추론하는 방식을 "리터럴타입"
let n01 = 1;

// 타입스크립트에는 치트키가 존재!!!
// 모든 타입(*숫자, 문자, 논리 등)을 초월하는 타입!!

let a: any = 0;
a = 'hello';

// JS에서 undefined => 변수안에 값이 지정되지 않았을때
// TS에서는 undefined 하나의 타입

let u: undefined = undefined;

// 변수에 대한 타입!!
// 함수, 객체에 대한 타입정의!!!

let o2: object = {
  name: 'park',
  age: 100,
};

o2 = {
  first: 1,
  second: 2,
};

// TS에서 객체의 타입정의는 interface 키워드!!

interface IPerson {
  name: string;
  age: number;
}

let good: IPerson = {
  name: 'Jack',
  age: 32,
};

// good = {
//   name: 1,
//   age: '32',
// };

// let bad1: IPerson = {
//   name: 'Jack',
// };
// let bad2: IPerson = {
//   age: 32,
// };
// let bad3: IPerson = {};
// let bad4: IPerson = {
//   name: 'Jack',
//   age: 32,
//   etc: true,
// };

// 선택적 속성 = 옵셔널 프로퍼티 = optional property
interface IPerson2 {
  name: string;
  age: number;
  etc?: boolean;
}

let good1: IPerson2 = {
  name: 'kim',
  age: 20,
};

let good2: IPerson2 = {
  name: 'kim',
  age: 20,
  etc: true,
};

// JS 구조분해할당!!
let key = {
  first: 1,
  second: 2,
};

let { first, second } = key;

// 익명 인터페이스 => interface 키워드를 사용하지 x
// interface ai {
//   name: string;
//   age: number;
// }

// 객체 안에서 사용되는 익명 인터페이스
let ai: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 32,
};

// 함수에서 익명 인터페이스가 사용되는 경우!!

function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
}

printMe(ai);

// JS에서 클래스를 사용한다는 것은 비슷한 패턴 혹은 반복되는 객체를 보다 효율적으로 만들어서 관리하고자 하기 때문!!!

class Person1 {
  name?: string;
  age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = 'jack';
jack1.age = 32;

console.log(jack1);
