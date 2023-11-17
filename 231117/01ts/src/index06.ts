// 함수에 대한 타입 정의방법
// 함수 표현식!! => 고차함수 접근
// 세상에 모든 코드가 객체지향의 친절한 형태로 개발되지는 않기 때문!!

// 우리가 그동안 함수를 사용할 때마다
// function() / let test = ()
// 원래 원칙적으로 함수를 선언하기 위해서는

// let add = new Function('a', 'b', 'return a + b');
// let result = add(1, 2);
// console.log(result);

function add(a: number, b: number) {
  return a + b;
}

console.log(add(10, 20));

let add2 = function (a: number, b: number) {
  return a + b;
};
console.log(add2(20, 20));

// 함수는 객체 이다.
// 함수는 1급 시민이다!!
// 함수가 왜 1급 시민일까?
// 1) 자바스크립트에서 함수는 변수에 할당가능
// 2) 다른 함수의 인자값 = 매개변수으로 사용가능 = 콜백함수
// 3) 다른 함수의 반환값으로 사용가능
