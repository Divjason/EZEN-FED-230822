// TS : 대표적인 이터러블 객체 : 배열의 map, reduce, filter
// JS : 문법 복기(습)

const multiply = (result: number, val: number): number => result * val;
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tempResult = numbers
  .filter((val) => val % 2 != 0)
  .map((val) => val * val)
  .reduce(multiply, 1);
let result = Math.round(Math.sqrt(tempResult));
console.log(result);
