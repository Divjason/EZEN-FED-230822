// JS 함수를 선언 / 호출!!! => 실행
// 문제 봉착!! why?

// const foo = () => {};
// const bar = () => {};

// foo();
// bar();

// 웹브라우저에서는 3개의 언어밖에 실행을 못한다!!!
// html, css, js

// 동기 처리방식으로 함수를 실행!!!

// const sleep = (func, delay) => {
//   const today = Date().now;
//   const delayUntil = today + delay;
//   while (today < delayUntil);
//   func();
// };

// function foo() {
//   console.log('foo');
// }

// function bar() {
//   console.log('bar');
// }

// sleep(foo, 3000);
// bar();

// 3초간은 아무것도 실행되지 않는다
// 3초가 경과되면, foo, bar실행!!!

// 비동기처리 방식으로 코드를 작성한다면?!

function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

setTimeout(foo, 3000);
bar();
