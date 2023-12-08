let numArray: number[] = [1, 2, 3];
let strArray: string[] = ['Hello', 'World'];

// interface IPerson {
//   name: string;
//   age?: number;
// }

interface TestA {}

type IPerson = {
  name: string;
  age?: number;
};

let personArray: IPerson[] = [{ name: 'jack' }, { name: 'jane', age: 32 }];

// 실제현업에서는 객체의 타입정의 80~90%는 interface로 사용!!
// 간혹 type 별칭!!
// type별칭 VS interface
// 100%맞는 말은 아니나, 이렇게 생각하는게 정신건강!!
// type별칭의 경우는 확장적 개념이 상대적으로 부족하다!!
// interface : extends & implement & abstract
