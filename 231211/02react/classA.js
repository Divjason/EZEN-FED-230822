// JS => class : 공통된 형태를 띄고있는 객체를 보다 손쉽고, 효율적으로 생성!!

// const studentA = {
//   name: "David",
//   grade: "A+",
//   age: 20,
//   study() {
//     console.log("열심히 공부함");
//   },
//   introduce() {
//     console.log("안녕하세요!");
//   },
// };

// const studentB = {
//   name: "Jane",
//   grade: "B+",
//   age: 22,
//   study() {
//     console.log("최선을 다하는 인재");
//   },
//   introduce() {
//     console.log("항상 감사합니다!");
//   },
// };

class Student {
  // field
  name;
  grade;
  age;
  // constructor
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // method
  study() {
    console.log("열심히 공부함");
  }
  introduce() {
    console.log("안녕하세요!");
  }
}

const studentA = new Student("David", "A+", 20);
// Student 클래스 생성자 : 붕어빵 틀
// new Student : 프로토타입 함수
// new Student를 통해서 만들어지는 객체 => 프로토타입 객체
// studentA : 인스턴스 객체 (*클래스 생성자를 통해서 탄생한 일종의 붕어빵)

console.log(studentA);
console.log(studentA.study());
console.log(studentA.introduce());

// class StudentDeveloper extends Student {
//   field
//   favoriteSkill;

//   constructor
//   constructor(name, grade, age, favoriteSkill) {
//     super(name, grade, age);
//     this.favoriteSkill = favoriteSkill;
//   }

//    method
//   programming() {
//     console.log(`${this.favoriteSkill}로 프로그래밍함`);
//   }
// }

class StudentDeveloper extends Student {
  // field
  favoriteSkill;

  // constructor
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // method
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}

const studentB = new StudentDeveloper("Jane", "B+", 21, "JS");
console.log(studentB);

// 접근제어자를 사용하면, 굳이 우리는 field값을 사용하지 않고, 생략해도 된다!! + this를 활용한 객체의 key값 정의도 생략이 가능!!

// 접근제어자는 무엇이 있었나? => 타입스크립트
// private, protected, public
