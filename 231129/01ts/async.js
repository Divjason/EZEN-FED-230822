// function displayHello() {
//   console.log('Hello');
// }

// displayHello();

// JS 비동기처리방식!!!
// Callback함수 / Promise객체 : response, reject => then(), catch(), finally() / fetch() : promise => then(), catch()
// async, await

// async function displayHello01() {
//   console.log('Hello01');
// }
// displayHello01();

// Promise 객체를 활용한 비동기처리방식 코드!!

// function whatsYourFavorite() {
//   let fav = 'Javascript';
//   return new Promise((resolve, reject) => resolve(fav));
// }

// function displaySubject(subject) {
//   return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
// }

// whatsYourFavorite().then(displaySubject).then(console.log);

// 위 코드를 async, await방식으로 변환!!
// sync(동기) <-> async(비동기)
// async function whatsYourFavorite() {
//   let fav = 'Typescript';
//   return fav;
// }

// async function displaySubject(subject) {
//   return `Hello ${subject}`;
// }

// whatsYourFavorite().then(displaySubject).then(console.log);

async function whatsYourFavorite() {
  let fav = 'Nodejs';
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

// 비동기적으로 실행문을 처리하는 방식의 함수
// 비동기적으로 처리할 때, 유의사항!!!
// 아무리 실행문을 비동기적으로 처리한다고 해도, 우선처리 실행을해야하는 코드가 있다면, 반드시 해당 실행문을 먼저 처리 후 다음번 코드를 실행하게끔 해야한다!!!

async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

init();
