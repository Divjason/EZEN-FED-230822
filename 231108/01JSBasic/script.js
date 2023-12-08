// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// const flgA = true;
// const myFunction = (flgA) => {
//   for (let i = 0; i < 10; i++) {
//     if (flgA === false) {
//       continue;
//     }

//     if (i % 2 === 0) {
//       continue;
//     }

//     console.log(i);
//   }
// };

// myFunction(flgA);

// const a = 10;
// const b = 20;
// console.log(a < b);
// console.log(a > b);

// 문자열을 사용할 때, boolean
// includes() => 해당 메서드 안에 인자값으로 들어온 문자열이 앞에서 사용중인 객체 안에 있으면 true, 없으면 false

// const user = 'iPhone';
// const isIos = navigator.userAgent.includes(user);
// console.log(isIos);

// if (isIos) {
//   alert(`어서오세요. ${user} 유저님! 반갑습니다.`);
// } else {
//   alert(`어서오세요. 고객님! 반갑습니다.`);
// }

// const num = Number.MAX_SAFE_INTEGER;
// const num1 = Number.MIN_SAFE_INTEGER;
// console.log(num);
// console.log(num1);

// let user = parseInt(prompt('원하시는 숫자를 입력하세요!'));

// if (user !== null || user !== undefined) {
//   if (user < Number.MAX_SAFE_INTEGER) {
//     console.log('A');
//   }
// }

// 문자열 = 문자로 이루어진 배열!!!
