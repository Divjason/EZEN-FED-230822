// 배열 메서드
// 변칙성 메서드 : map() / filter() / *reduce()
// reduce() : 누산기!!!!
// 누산기 = 누적된 값을 계산할 수 있는 메서드!!

let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((total, current) => total + current, 0);
// 0 + 1 + 2 + 3 + 4 + 5

console.log(result);
