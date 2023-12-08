import { createRangeIterable, RangeIterable } from './createRangeIterable';
const iterable = new RangeIterable(1, 4);
for (let value of iterable) console.log(value);

// 굉장히 난이도가 있는 내용!!
// JS 이터러블 객체 / 이터레이터 객체 / 제너레이터 함수 / next()
// TS 클래스 생성자 => 이터러블한 객체 생성
// for of 반복문 사용!!

// range 함수 값을 반복하는 것 VS 이터러블 객체를 생성해서 값을 반복하는 것!!
// 리액트가 대표적인 선언형 프로그래밍 사용하고 있는 프레임워크!!!
