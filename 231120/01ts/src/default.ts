// 지난시간에 배웠던 type 별칭 형태
// type stringNumberFunc = (arg0: string, arg1: number) => void;
// const f: stringNumberFunc = function (a: string, b: number): void {};
// const g: stringNumberFunc = function (c: string, d: number): void {};

// 객체의 타입 정의: interface!! => 객체 타입정의 전문!!!
// interface INameable {
//   name: string;
//   age: number;
// }

// const jack: INameable = {
//   name: 'jack',
//   age: 20,
// };

// 객체의 타입 정의 : interface가 아닌, type별칭으로도 타입정의 가능!!!

type Person = {
  name: string;
  age: number;
};

// JS에서 함수의 매개변수 값이 기본값 설정!!
// JS에서 구조분해할당 => 할당하고자하는 값과, 값을 받는 키가 동일한 네이밍을 가지고 있는 경우, 축약해서 1번만 사용해도 값은 동일하다!
// const makePerson = (name: string, age: number = 10): Person => {
//   const person = {
//     name,
//     age,
//   };
//   return person;
// };

const makePerson = (name: string, age: number = 10): Person => ({ name, age });

console.log(makePerson('jack'));
console.log(makePerson('jack', 33));

// TS가 많이 어렵나요? => JS문법이 명확하게 알고 있다면,
