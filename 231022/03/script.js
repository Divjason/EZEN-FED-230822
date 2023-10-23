// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   setTimeout(() => console.log("B"), 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (cb) => {
//   setTimeout(() => {
//     console.log("B");
//     cb();
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC());

// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문 접수!`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// const display = (result) => {
//   console.log(`${result} 준비 완료!`);
// };

// order("아메리카노", display);

// 콜백지옥
// let displayLetter = () => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//       setTimeout(() => {
//         console.log("D");
//         setTimeout(() => {
//           console.log("Stop");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// displayLetter();
// new Promise(resolve, reject)

let likePizza = true;

const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다!");
  } else {
    reject("피자를 주문하지 않습니다!");
  }
});

//메서드 체이닝 기법

pizza.then((result) => console.log(result)).catch((err) => console.log(err));
