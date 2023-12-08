// class 생성자 함수를 활용해서 프로토타입 객체생성
// 해당 프로토타입 객체를 활용 => 인스턴스 객체생성
// 생성자 함수 : 강사존재여부, 학생 아이디, 수강참여 학생리스트
// 생성자 함수를 생성~!!

// 인스턴스 객체 => 강사존재여부에 따라서, 강사의 이름 & 학생리스트가 콘솔창에 출력되거나 VS 학생리스트만 콘솔창에 출력되게끔하는 프로그래밍 코드를 작성해보겠습니다~!!

// class를 활용한 생성자 함수
class Lecture {
  constructor(hasTutor, lectID, members) {
    this.hasTutor = hasTutor;
    this.lectID = lectID;
    this.members = members;
  }
}

let class1 = new Lecture(false, "L001", ["Ahn", "Han", "Park"]);
let class2 = new Lecture(true, "L002", ["Lee", "Choi", "Kim"]);

let getStudents = (classRoom) => {
  let { hasTutor, lectID, members } = classRoom;
  let tutor;
  let students;
  hasTutor ? ([tutor, ...students] = members) : ([...students] = members);
  return students;
};

console.log(getStudents(class1));
console.log(getStudents(class2));
