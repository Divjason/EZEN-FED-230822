// Set() 내장객체 => Map() 내장객체의 장점을 어느정도 사용가능!!!

// 배열이 갖지 못한 기능을 추가해주기위해서 나옴!!
// 배열은 배열안에 들어가있는 각각의 아이템마다 인덱스 값을 부여!!! => 동일한 아이템이 존재하더라도 컴퓨터 인덱스값이 다르기 때문에 다른 아이템인식 가능!!!

// let arr = [1, 3, 5, 1, 4, 3, 9];
// 하나의 배열안에 중복되는 값을 사용하고 싶지 않을 수 있다!!!

// let obj = {
//   // title: "js",
//   page: 365,
//   title: "ts",
// };

// obj.title;

// let numSet1 = new Set();
// numSet1.add("one").add("two");
// console.log(numSet1);

let numSet2 = new Set([1, 2, 3]);
console.log(numSet2);

let numSet3 = new Set([1, 2, 1, 3, 1, 5]);
console.log(numSet3);
console.log(numSet3.add(7));
console.log(numSet3);
console.log(numSet3.has(4));
console.log(numSet3.has(2));
console.log(numSet3.delete(5));
console.log(numSet3);
console.log(numSet3.clear());
console.log(numSet3);
