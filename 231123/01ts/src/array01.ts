// TS
// 함수를 작성할 때, 2가지 방식으로 실행값을 표현할 수 있었습니다!!!
// 1) 실행문, 2) 표현식문
// TS 및 JS에서 코드를 작성할 때, 2가지 방식으로 개발이 가능!!!
// 1) 명령형 방식(*기존에 사용중인 내장 함수를 활용해서 코드를 개발) 2) 선언형 방식(*프로그래밍 코드가 작동하는데 있어서 각각의 과정에 일치하는 별도의 함수를 구현하는 방법)

// TS : JS의 super set 언어!!!!
// TS가 개발됨으로 인해서, JS를 활용해서 만들 수 있는 코드의 영역(*반경)이 굉장히 넓어졌다!!!
// Java, C언어를 활용해야만 작성할 수 있었던 프로그래밍 코드를 이제 TS를 활용한 JS에서도 가능케 되었음!!!

// TS를 활용해서 표현식문, 선언형 방식의 프로그래밍 코드도 생성할 수 있는데, 이러한 방식의 프로그래밍 형식을 "함수형 프로그래밍"

// "함수형 프로그래밍"을 최적화된 결과값을 도출하려면, "순수함수"의 조건에 충족!!

// 순수함수 : side-effect(*부작용)없는 함수
// 불순함수
// 1) 함수의 실행문 안에 입력 혹은 출력 관련된 코드가 없어야 한다!!
// 2) 함수의 매개변수가 반드시 const형식의 변수값, readonly형식의 값!!
// 3) 함수의 실행문 영역에서 발생된 결과값을 즉시 반환할 수 있어야한다!!! (*return)
// 4) 함수의 실행문에 비동기 코드가 없어야 한다
// 5) 함수의 실행문안에 콜백함수가 없어야 한다

// let sample01 = 1;
// const impure = (sample01: number) => {};

// const a = 1;
// const b = 2;
// const pureFunc = (a: number, b: number) => {
//   return a + b;
// };

// 순수함수 VS 불순함수
// const array = [1, 2, 3, 4, 5];
// const test01 = (array: readonly number[]) => {
//   array.push(1);
//   array.splice(0, 1);
// };
// test01(array);

// JS의 타입종류!!!
// number, string, boolean, Null, undefined, array, object, function, symbol
// JS에서 타입은 크게 2가지 분류!!!

// 1) 원시타입 : number, string, boolean, Null, undefined, symbol
// 2) 객체타입 : array, object, function

// JS에서 원시타입에 속하는 요소들은 기본적으로 무조건 읽기전용 값!!! => const 키워드

// 객체타입의 경우는 상황에 따라서 값을 변경시킬 수 있다!!!

// JS에서 원시타입, 객체타입에 따라서 해당 값을 복사하는 방식도 차이가 생긴다!!!

let original = 1;
let copied = original;

copied += 2;
console.log(original, copied);

// 원시타입 : 읽기전용 속성값!!
// 원시타입의 속성값을 외부로 복사를 하더라도 원본값이 바뀌지 않는 형태를 깊은 복사!!

// 객체타입 : 상황에 따라서 읽기전용 속성값이 되지 않는다!!
// 객체타입을 복사 : 얕은 복사
const originalArray = [5, 3, 9, 7];
const shallowArray = originalArray;
shallowArray[0] = 0;
console.log(originalArray, shallowArray);

// 가급적이면, 얕으복사를 하지 않는것이 좋다!!
// 객체타입의 얕은복사를 깊은복사 형태로 바꾸는 방법!!

const oArray = [1, 2, 3, 4];
const deepCopiedArray = [...oArray];
deepCopiedArray[0] = 0;
console.log(oArray, deepCopiedArray);

// const 키워드를 사용할 때, 원시타입이 아닌 객체타입의 경우에는 안에 담긴 값이 변경!!!
// 재할당을 허용하겠다는 것이 아니라 기본적인 객체타입의 속성을 유지하는 것 뿐이다!!
// 가급적이면, 얕은복사는 하지 않는 것이 좋다!!
// const로 정의한 값에는 특정한 사유가 없다면, 값을 변경시켜주지 않는 것이 좋습니다.
