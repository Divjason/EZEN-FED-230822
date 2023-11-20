// class 생성자를 언제, 왜 사용하는가?
// JS에서 반복적으로 사용할 객체를 정의하고자 할 때

export class A {
  value: number = 1;
  method: () => void = function (): void {
    console.log(`value: ${this.value}`);
  };
}
