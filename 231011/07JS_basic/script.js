// const students = ["Park", "Kim", "Lee", "Kang"];

// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, <br/>`);
// }

// document.write(students[0]);
// document.write(students[1]);
// document.write(students[2]);
// document.write(students[3]);

// let colors = ["red", "blue", "green", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   document.write(`${colors[i]} <br/><br/>`);
// }

// const students = ["Park", "Kim", "Lee", "Kang"];

// Class형 함수 (*2015년까지만 하더라도 JS 함수표기법)
// students.forEach(function (student) {
//   document.write(`${student} <br/>`);
// });

// 화살표 함수 (*2015년이후에 ECMA5 문법이 나오면서 새롭게 선보인 함수 표기법)
// students.forEach((student) => {
//   document.write(`${student} <br/>`);
// });

// const gitBook = {
//   title: "깃 & 깃허브 입문",
//   pubDate: "2023-10-11",
//   pages: 272,
//   finished: true,
// };

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]} <br/>`);
// }

const students = ["Park", "Kim", "Lee", "Kang"];

for (student of students) {
  document.write(`${student} <br/>`);
}
