// class 생성자를 사용할 때, 정적인 요소의 기능을 추가!!

// class A {
//   initValue = 1;
// }

// let initVal = A.initValue;
// let initVal = new A();
// let result = initVal.initValue;
// console.log(initVal.initValue);

class A {
  static initValue = 1;
}

let initVal = A.initValue;
console.log(initVal);

class C {
  static whoAreYou(): string {
    return `Im class C`;
  }
}

class D {
  static whoAreYou(): string {
    return `Im class D`;
  }
}

console.log(C.whoAreYou());
console.log(D.whoAreYou());
