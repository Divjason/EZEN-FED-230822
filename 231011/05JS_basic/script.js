/* 
1.조건값을 정의할 수 있는 변수
2.사용자로부터 id, pw 값을 받아서 정의할 수 있는 변수
3.사용자로부터 받은 해당 값과 조건값이 일치하는지 평가
*/

let id = "ezen";
let pw = "1234";

let user_id = prompt("당신의 아이디는?");
if (id === user_id) {
  let user_pw = prompt("당신의 비밀번호는?");
  if (pw === user_pw) {
    alert(`${user_id}님 반갑습니다!`);
  } else {
    alert(`${user_id}님 비밀번호가 일치하지 않습니다!`);
    location.reload();
  }
} else {
  alert(`아이디가 일치하지 않습니다!`);
  location.reload();
}
