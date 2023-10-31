// 구조 분해 할당
// 자바스크립트 고급스킬 => 모듈!!!
// 레고 블록쌓기

const fruits = ['사과', '복숭아'];
console.log(fruits);

// let apple = fruits[0];
// let peach = fruits[1];

let [apple, peach] = ['사과', '복숭아'];
console.log(apple);
console.log(peach);

let [spring, , fall] = ['봄', '여름', '가을', '겨울'];
console.log(spring);
console.log(fall);

let [teacher, ...students] = ['kim', 'lee', 'park', 'choi'];
console.log(teacher);
console.log(students);

let x = 10;
let y = 20;

console.log(([x, y] = [y, x]));
