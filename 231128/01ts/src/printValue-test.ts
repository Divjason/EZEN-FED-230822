import { printValue, Valuable } from './printValue';

printValue(new Valuable<number>(1));
printValue(new Valuable<boolean>(true));
printValue(new Valuable<string>('hello'));
printValue(new Valuable<number[]>([1, 2, 3]));

// 제네릭 인터페이스를 활용해서 객체의 타입을 정의
// 해당 인터페이스를 가지고, 클래스 생성자를 만들었음
// 함수의 인자값으로 클래스 생성자를 적용해서 바로 객체의 값을 출력하는 구문을 완성!!!

// 오후!!!
// 인터랙티브 웹페이지 구현!!!
// x, y좌표값을 활용해서, zoom-in, zoom-out / 스크롤 상태변화값!!
// 리액트!!
// 수!!! => 1) 리액트 / 2) TS & 리액트
