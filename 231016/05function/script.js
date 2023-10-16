//전개연산자 or 전개구문
// let fruits = ["apple", "banana", "grape", "pineapple", "peach"];
// console.log(fruits);

// console.log(...fruits);

// function addNum(a, b) {
//   return a + b;
// }

// console.log(addNum(1, 3, 5, 7));

function addNum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(addNum(1, 3));
console.log(addNum(1, 3, 5, 7));
