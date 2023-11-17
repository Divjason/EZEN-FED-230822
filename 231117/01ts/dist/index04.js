// JS 함수!!
// TS 객체 & 함수 난이도가 있다!! => 객체의 타입을 정의할 때, 객체 안에 포함되어있는 각각의 요소의 타입을 정의해야하기 때문에
// TS => JS 기본 지식!!
// 함수안에 매개변수의 타입을 각각 정의해야하기 때문 + 함수가 반환하는 결과값에 타입도 정의!!
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
// 함수가 항상 return문을 사용하지 않는다!!
// 아래 형식의 함수 타입은 불충분하다!!
// 타입스크립트에서는 return문이 없는 반환값을 주지 않는 함수의 결과값에 대한 타입을 별도로 타입정의!!!
function printMe(name, age) {
    console.log(`name: ${name}, age: ${age}`);
}
console.log(printMe('park', 20));
// number, string, boolean, undefined, any, void, object
// 꼭 함수의 타입정의가 위처럼만 가능할까?
// 함수 시그니처의 방식으로도 타입을 정의!!
// 전통적인 클래스 함수!!!
function printMe00() { }
// 익명함수!!!
// 함수시그니처
let printMe01 = function (name, age) {
    console.log(`${name}, ${age}`);
};
// 화살표함수!!!!
let printMe02 = () => { };
let f = function (a, b) { };
let g = function (c, d) { };
export {};
//# sourceMappingURL=index04.js.map