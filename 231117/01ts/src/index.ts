import { ICompany, IPerson } from 'index01';

// let jack: IPerson = {
//   name: 'jack',
//   age: 32,
// };

// let apple: ICompany = {
//   name: 'Apple Computer',
//   age: 43,
// };

// 객체 축약법 : 객체안에 키와 새롭게 생성하고자 하는 변수명이 동일한 경우
// let jack: IPerson = { name: 'jack', age: 32 };
// let apple: ICompany = { name: 'Apple Computer', age: 43 };

// console.log(jack, apple);

// let jack: IPerson = { name: 'jack', age: 32 };
// let { name, age } = jack;
// console.log(name, age);

interface addresstype {
  country: string;
  city: string;
  address1: string;
  address2: string;
  address3: string;
}

let address: addresstype = {
  country: 'Korea',
  city: 'Seoul',
  address1: 'Gangnam-gu',
  address2: 'sinsa-dong',
  address3: '789 street',
};

const { country, city, ...detail } = address;
console.log(detail);

// JS 전개연산자를 활용해서 서로다른 배열 혹은 객체값을 하나로 합칠 때에도 사용했음!!

// let a = { x: 0 };
// let b = { y: 0 };

let coord = { ...{ x: 0 }, ...{ y: 0 } };
console.log(coord);

// 중첩객체의 형식이 아닌, 1개의 통합된 객체값을 도출!!
// 서로 다른 배열 요소를 하나의 배열 안에 아이템으로 가져오고 싶을 때

// 객체 타입 영역에서의 이단아!!
let person: object = {
  name: true,
  age: 32,
};
// 타입 변환장치!!
(<{ name: boolean }>person).name;

// 타입 단언!!
// 타입이 아직 선언되지 않는 요소의 타입을 임시로 추정하고자 할 때

import INameable from 'index02';

let obj: object = { name: 'Jack' };

let name0 = (<{ name: string }>obj).name;
let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;
console.log(name0, name1, name2);
