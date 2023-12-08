// // JS와 jQuery에서는 1개의 객체에 여러 함수를 연속적으로 사용할 수 있었다!!! => 메서드 체이닝 기법!!!
// const body = document.querySelector('body');
// fetch('https://www.naver.com').then().catch().finally();

// class calculator {
//   // 오버로드
//   name: string;
//   age: number;
//   // 생성자함수
//   constructor(name: string, age: number) {
//     this.name: name;
//     this.age: age;
//   }
// }

// 접근제어자 : class 생성자를 사용할 때, 해당 클래스의 속성값을 임의로 수정하지 못하도록 하기 위해서 생성자함수 안에 할당된 인자값에 private 접근제어자를 설정, 나중에 생성자함수의 인자값을 수정할 수 있도록 설정하려면, public 이라는 접근제어자를 설정!!!
// 접근제어자를 사용하면, class 생성자를 만들때, 반드시 기입해야하는 오버로드 내용 + 생성자 함수 안에 입력해야하는 인스턴스 객체의 key와 value 값 설정도 생략가능!!

export class Calculator {
  constructor(public value: number = 0) {}
  add(value: number) {
    this.value += value;
    return this;
  }
  multiply(value: number) {
    this.value *= value;
    return this;
  }
}
