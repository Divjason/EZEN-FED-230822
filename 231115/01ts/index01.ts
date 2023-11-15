// TS에서 생성자함수 사용 및 타입정의!!

class Person2 {
  constructor(public name: string, public age?: number) {}
}

let jack2: Person2 = new Person2('Jack', 32);

console.log(jack2);

// TS에서 생성자함수 & 인터페이스를 결합해서 사용하는 방법!!!
interface IPerson4 {
  name: string;
  age?: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}

let jack4: IPerson4 = new Person4('Park', 20);
console.log(jack4);
