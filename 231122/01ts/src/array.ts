// let array = new Array();
// array.push(1);
// array.push(2);
// array.push(3);

// console.log(array);

let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];
interface IPerson {
  name: string;
  age?: number;
}
type IPerson01 = {
  name: string;
  age?: number;
};
let personArray: IPerson01[] = [{ name: 'Jack' }, { name: 'Jane', age: 32 }];

// 배열이 중요한 이유, 배열객체가 갖고 있는 속성!!!
// 배열 = iterable object => method & property
