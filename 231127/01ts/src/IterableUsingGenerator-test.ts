import { IterableUsingGenerator } from './IterableUsingGenerator';

const array = [1, 2, 3];
const test = new IterableUsingGenerator(array);
for (let item of test) {
  console.log(item);
}

// 우리는 지금까지 class 생성자를 활용해서 이터러블한 객체를 만들었고, 이 이터러블한 객체를 만들기위해서 제너레이터 함수를 사용했음 => 이들의 타입을 정의하기 위해서 제네릭 인터페이스라는 개념을 활용!!!

// 이터러블 / 제너레이터
// 비동기(*) => 타입스크립트!!
