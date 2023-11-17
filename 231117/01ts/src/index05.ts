interface INameable {
  name: string;
}

function getName(o: INameable) {
  return o != undefined ? o.name : 'unknown name';
}

let n = getName(undefined);
console.log(n);
console.log(getName({ name: 'park' }));

// 만약, JS 로또추첨 프로그래밍 코드!!
// Math 6개 숫자를 랜덤방식 생성
// 아무런 아이템도 담겨있지 않은 비어있는 배열안에
// 값이 생성될 때마다 push메서드로 해당 배열에 값을 하나씩 넣어줬습니다!!

// 있어도, 없어도되는 객체 키를 정의: 선택적 프로퍼티 = 옵셔널 프로퍼티
interface IAgeable {
  age?: number;
}

function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0;
}

console.log(getAge(undefined));
console.log(getAge(null));
console.log(getAge({ age: 32 }));
