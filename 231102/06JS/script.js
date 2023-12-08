// 일반 사용자들에게 현재 에러가 발생되었다는 사실 인지시켜줄 필요가있음!!

// 예외 조항 처리!!

// console.log("시작");
// add();
// console.log("실행중...");
// console.log("종료");

try {
  //실행할 코드
  console.log("시작");
  add();
  console.log("실행중...");
} catch (err) {
  //예외사항이 발생했을 경우, 실행할 코드
  console.log(`오류발생 : ${err}`);
} finally {
  //try문 이후에 실행할 코드 = 예외와 상관없이 무조건 실행
  console.log("종료");
}

// 만약에 개발자가 개발자나름의 에러메세지를 커스터마이징 하고 싶다면?!
// throw 문

let json = '{"grade":3, "age":25}';

try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw "사용자 이름이 없습니다!";
  }
} catch (err) {
  console.log(err);
} finally {
  console.log("일단종료!");
}
