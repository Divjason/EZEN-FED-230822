// 콘솔창에 0부터 9까지의 숫자를 출력시키는 코드를 작성해보세요~!! (*for 반복문을 활용해서)

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let myNumber = 0;

// while (myNumber < 10) {
//   console.log(myNumber);
//   myNumber += 1;
// }

// continue : 해당 요소를 건너뛰고 이어서 반복문을 실행시키고자 할 때!!

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
