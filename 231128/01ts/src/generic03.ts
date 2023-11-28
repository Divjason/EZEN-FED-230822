// 배열, 함수의 아이템 혹은 매개변수의 타입이 미지정상태일 때, 타입변수를 활용 타입정의!!!
// 제네릭타입!!!

// 객체의 타입을 정의할 때에도 제네릭타입을 적용할 수 있음!!

interface obj {
  name: string;
  age?: number;
}

const obj01: obj = {
  name: 'park',
  age: 20,
};

// 객체는 key, value => property
// 그런데, key안에 담길 value값이 어떤타입으로 미정인경우!!
// 사용자가 선택하는 옵션값에 따라서 key안에 담겨야하는 값이 가변적으로 바뀌는 경우가 발생!!
// 롯데월드 : 버튼 옵션!!! => 화면 출력 값!!
// 조건문 => JS
// React => 명령문  선언문
// if(x), 삼항조건연산자

// 제네릭 인터페이스!!
// interface IValuable<T> {
//   value: T;
// }

// 제네릭 총집합!!
// 1) 제네릭 함수 구문
function identity<T>(arg0: T): T {
  return arg0;
}

// 1_1) 화살표 함수 제네릭 함수 구문
const identity01 = <T>(arg0: T): T => {
  return arg0;
};

// 2) 제네릭 타입별칭 구문
type IValuable<T> = {
  value: T;
};

// 3) 제네릭 클래스 구문
class Valuable<T> {
  // 접근제어자 (*public, private)
  // 오버로드, 생성자함수
  constructor(public value: T) {}
}
