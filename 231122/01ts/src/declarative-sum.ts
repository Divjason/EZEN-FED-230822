// 선언형 방식의 코드!!
// 정통백엔드 => 프론트엔드
import { range } from './range';
import { fold } from './fold';
import { filter } from './filter';
import { map } from './map';

let numbers: number[] = range(1, 101);
// const idOdd = (n: number): boolean => n % 2 != 0;
// const idEven = (n: number): boolean => n % 2 == 0;
let result = fold(
  map(numbers, (value) => value * value),
  (result, value) => result + value,
  0
);

console.log(result);
