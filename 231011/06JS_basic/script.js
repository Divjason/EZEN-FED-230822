// let subject = prompt("신청할 과목을 선택하세요!", "1-HTML, 2-CSS, 3-JS");

// if (subject !== null && subject !== "") {
//   switch (subject) {
//     case "1":
//       document.write("HTML을 신청했습니다.");
//       break;
//     case "2":
//       document.write("CSS를 신청했습니다.");
//       break;
//     case "3":
//       document.write("JS를 신청했습니다.");
//       break;
//     default:
//       document.write("잘못입력했습니다. 다시 입력해주세요!");
//   }
// } else {
//   alert("정상적인 과목을 선택해주세요!");
// }

let site = prompt("네이버, 다음, 구글 중 즐겨 사용하는 포털사이트는?");
let url;

if (site !== null && site !== "") {
  switch (site) {
    case "구글":
      url = "https://www.google.com";
      break;
    case "다음":
      url = "https://www.daum.net";
      break;
    case "네이버":
      url = "https://www.naver.com";
      break;
    default:
      alert("보기중에 없는 사이트입니다!");
  }
}

if (url) {
  location.href = url;
}
