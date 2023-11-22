const numbers: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  const item: number = numbers[i];
  console.log(item);
}

// 배열도 객체와 같이 구조분해 할당이 가능!!!
const array = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array;
console.log(first, second, third, rest);
