import { arrayLength, isEmpty } from './arrayLength';

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

interface IPerson {
  name: string;
  age?: number;
}
let personArray: IPerson[] = [{ name: ',jack' }, { name: 'Jane', age: 32 }];

console.log(
  arrayLength(numArray),
  arrayLength(strArray),
  arrayLength(personArray),
  isEmpty([]),
  isEmpty([1])
);
