// 정규식 = 정규표현식
// 정규표현식을 왜 사용하는가?
// 특정 패턴을 사용해서 문자열을 표현하는 언어!!!
// 쇼핑몰의 경우, 회원가입처리, 주문접수 처리
// 공통적으로 사용자가 입력하는 데이터
// 효율적으로 처리할 때!!

let regexp = /\d{3}/;
// 숫자 3자리의 패턴을 regexp라는 변수에 할당하고 표현식을 사용하겠다!!!

console.log(regexp.test("123"));
console.log(regexp.test("456"));
console.log(regexp.test("Hello"));

let regexp01 = new RegExp(/\d{3}/);

console.log(regexp01.test("123"));
console.log(regexp01.test("456"));
console.log(regexp01.test("Hello"));

let str = "ES2015 is powerfull";
console.log(str.match(/ES6/));
// match() : 문자열에서 정규 표현식에 일치하는 부분을 찾아라!! 라는 메서드

str.replace(/ES2015/, "ES6");
console.log(str.replace(/ES2015/, "ES6"));

console.log(/es/.test(str));
console.log(/es/i.test(str));
// 정규표현식에서 i의 의미는 대.소문자를 가리지 않고 검색해서 찾아라!!! 라는 의미~

console.log(str.match(/ES\d\d\d\d/));

let hello = "Hello, everyone.";
console.log(/^H/.test(hello));
console.log(/^h/.test(hello));
console.log(/^h/i.test(hello));

console.log(/one.$/.test(hello));
console.log(/e.$/.test(hello));
console.log(/one$/.test(hello));

// ^: 특정 문자열 앞에 붙으면, 해당 문자로 시작하는지 여부를 확인!!! ^이 대괄호 안에서 사용되면 반대의 의미를 갖게된다!!!

console.log("ES2015".match(/[^0-9]/g));

let str02 = "Oooops";

console.log(str02.match(/o{2}/));
console.log(str02.match(/o{2,}/));
console.log(str02.match(/o{2,4}/i));

let str03 = "ES2015(ES6) is powerful";
let regexp02 = /ES2015|ES6/;
console.log(regexp02.test(str03));

// 정규식에서 숫자의 패턴만 찾아오고 싶을 때
/^[0-9]+$/;

// 정규식에서 양의 정수 패턴만 찾아오고 싶을 때
/^[1-9]\d*$/;
