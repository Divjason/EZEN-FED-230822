// 삼각형이 되기 위한 조건!!!
// 2변의 합이 가장큰 1개의 변의 크기보다 작으면 안됨!!!

let a = parseInt(prompt("삼각형의 첫번째 변을 입력"));
let b = parseInt(prompt("삼각형의 두번째 변을 입력"));
let c = parseInt(prompt("삼각형의 세번째 변을 입력"));

let solution = (a, b, c) => {
  let max;
  let answer = "Yes";
  let total = a + b + c;
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  if (total - max <= max) {
    answer = "No";
  }
  return answer;
};

console.log(solution(a, b, c));
