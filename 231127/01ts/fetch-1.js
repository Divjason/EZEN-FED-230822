// JS 비동기 처리방식 3부작!!!
// fetch() => 해당 함수를 활용해서 내.외부의 값을 가져와서 함수를 실행하면 무조건 반환되는 값이 Promise객체이다!!!
// Promise객체 => fulfilled / rejected
// fulfilled => then()
// rejected => catch()

fetch('student-2.json')
  .then((response) => response.json())
  .then((json) => {
    let output = '';
    json.forEach((student) => {
      output += `
      <h2>${student.name}</h2>
      <ul>
        <li>전공 : ${student.major}</li>
        <li>학년 : ${student.grade}</li>
      </ul>
      <hr>
      `;
    });
    document.querySelector('#result').innerHTML = output;
  })
  .catch((err) => console.log(err));
