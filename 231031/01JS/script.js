// const hello = (name, message = "안녕하세요!") => {
//   console.log(`${name}님, ${message}`);
// };

// const addNum = (a, b) => {
//   let sum = 0;
//   sum += a;
//   sum += b;
//   return sum;
// };

// 전개구문
const addNum = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum;
};
