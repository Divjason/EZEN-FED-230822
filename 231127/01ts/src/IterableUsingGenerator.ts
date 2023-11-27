// JS => 객체 지향언어
// 우리가 알고 있는 JS의 거의 모든 요소는 객체로 만들어져있다!!
// 핵심 오브 핵심 => class 생성자를 활용해서 우리 역시 객체를 만들어낼 수 있다!!
// class 생성자를 활용해서 => 이터러블한 객체도 만들어낼 수 있지 않을까?!!
// 과연? class 생성자를 활용해서 이터러블하 객체를 만든다면, 어떻게 타입을 정의해야할까?

// TS를 초반에 학습할 때, interface => 객체에 대한 타입을 정의할 때 사용했던 개념
// 객체에 대한 타입 정의할 때, 이미 만들어놓은 인터페이스 타입을 가져다가 새로운 객체타입을 정의할 때 받아서 사용할 수 있었음!!!
// implements 개념
// 제네릭!!! => 제네릭 인터페이스!
// 객체의 타입을 정의하고자하는 인터페이스를 생성할 때, 해당 객체안에 들어갈 key의 value값에 대한 타입이 미정인 경우!!!
// 클래스 생성자는 오버로드 & 생성자함수
// 오버로드는 언제 생략?! => 접근제어자!!! (*public private)

export class IterableUsingGenerator<T> implements Iterable<T> {
  constructor(public values: T[] = [], public currentIndex: number = 0) {}
  [Symbol.iterator] = function* () {
    while (this.currentIndex < this.values.length) {
      yield this.values[this.currentIndex++];
    }
  };
}
