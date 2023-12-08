import { range } from './range';

// let squares: number[] = range(1, 6).map((val: number) => val * val);
// console.log(squares);

// let names: string[] = range(1, 6);

/* 타입변환!!! */
let names: string[] = range(1, 6).map((val, i) => `[${i}] : ${val}`);
console.log(names);
