// JS에서 sort()메서드는 배열의 요소를 정렬하는데 사용!
// arr.sort([compareFunction])
// 아스키 문자 기준으로 정렬하기 때문에!
const numbers01 = [10, 3, 8, 4, 1];
numbers01.sort();
console.log(numbers01);

const numbers02 = [10, 3, 8, 4, 1];
const compare02 = (a, b) => {
  return a - b;
};
numbers02.sort(compare02);
console.log(numbers02);

const numbers03 = [10, 3, 8, 4, 1];
const compare03 = (a, b) => {
  return b - a;
};
numbers03.sort(compare03);
console.log(numbers03);
