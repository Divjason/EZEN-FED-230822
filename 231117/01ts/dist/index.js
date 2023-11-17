let address = {
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
let person = {
    name: true,
    age: 32,
};
// 타입 변환장치!!
person.name;
let obj = { name: 'Jack' };
let name0 = obj.name;
let name1 = obj.name;
let name2 = obj.name;
console.log(name0, name1, name2);
export {};
//# sourceMappingURL=index.js.map