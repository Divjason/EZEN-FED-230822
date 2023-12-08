// 객체 줄임 표기법!! Object Shorten Assignment
// const name = "david";
// const age = 20;

// const person = {
//   name,
//   age,
// };

// console.log(person);

// 구조분해할당!! Destructuring
// const person = {
//   name: "david",
//   age: 20,
// };

// const name = person.name;
// console.log(name);

// const name02 = person["name"];
// console.log(name02);

// const { name, age } = person;
// console.log(name, age);

// 전개 연산자 (*Spread Operator)
// const arr = [1, 2, 3, 4];
// const [a, b] = arr;
// console.log(a, b);

// const [a, b, ...rest] = arr;
// console.log(a, b, rest);

// 전개연산자 구문이 굳이 왜? 감정일기장 프로젝트를 진행할 때, 사용되었을까?
// 기존 일기데이터가 존재하는데, 이 위에 신규로 일기를 작성하는 경우!!! 전개연산자!!
// const newState = [state, ...state]
// Spread Operator > deep copy(*깊은복사) & shallow copy(*얕은복사)

// const person = {
//   name: "david",
//   age: 20,
// };

// const person2 = {
//   ...person,
//   address: "seoul",
//   name: "kim",
// };
// console.log(person2);

// let person3 = person;
// console.log(person3 === person);
// shallow copy(*얕은복사)가 되었다!!!
// JS 객체가 생성되면 => heap공간 해당객체만의 고유 주소생성 => 질서화된 구조x
// 객체만의 고유한 주소는 1개 밖에 존재하지 않지만, 해당 주소를 복사해서 다른 변수에 담아놓은 상태!!!

// let person2 = { ...person };
// console.log(person2);
// console.log(person2 === person);
// 전개연산자 구문을 활용해서 데이터값을 전달하는 경우에는 깊은 복사가 됨!! 깊은 복사가 되었다는 것은 원래있었던 데이터의 주소를 나눠쓴다는 개념이 아니라, 주소 자체를 아예 하나 별도로 만들어서 갖게되었다는 의미!!!

// const a = [1, 2];
// const b = [...a, 3];
// console.log(b);

// const c = [...a, ...b];
// console.log(c);

// 삼항조건연산자 (*Conditional Operator)

// const coffee = {
//   name: "americano",
//   price: 2400,
// };

// const coffee = undefined;

// if (coffee) {
//   console.log(coffee.name);
// } else {
//   console.log("There is no Coffee");
// }

// console.log(coffee ? coffee.name : "There is no Coffee");
