// 지금 이 부분 때문에, 어제, 오늘아침까지 JS 비동기!!

import {
  FirstOrderFunc,
  SecondOrderFunc,
  ThirdOrderFunc,
} from './function-signature';

export const add3: ThirdOrderFunc<number, number> =
  (x: number): SecondOrderFunc<number, number> =>
  (y: number): FirstOrderFunc<number, number> =>
  (z: number): number =>
    x + y + z;

// 고차함수의 마지막 실행함수의 최종 결과값을 반환하는 값!!!
// 클로저!!! : JS 중간보스
// 고차함수에서의 개념!!!
// 바깥쪽 함수의 결과값을 참조해서 마지막 본인의 함수실행문과 결합해서 결과값을 반환하는 특징!!!
// JS => 클로저
// FE  면접질문 단골
