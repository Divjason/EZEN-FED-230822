type Person = {
  name: string;
  age: number;
};

const printPerson = ({ name, age }: Person): void =>
  console.log(`name: ${name}, age: ${age}`);

printPerson({ name: 'park', age: 10 });

// 객체는 key & value로 구성된 하나의 property(*속성)들로 이루어져있음!!!

type KeyType = {
  [key: string]: string;
};

const makeObject = (key: string, value: string): KeyType => ({ [key]: value });
console.log(makeObject('name', 'park'));

// class 생성자도 결국 constructor() 생성자 함수!!
