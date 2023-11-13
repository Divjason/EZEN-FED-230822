<<<<<<< HEAD
// 1inch = 2.54cm

let inchValue = parseFloat(prompt('인치 값을 입력하세요'));
let cmValue = inchValue * 2.54;

alert(`${inchValue}인치는 ${cmValue}cm 입니다.`);
=======
let currentPage = 1; // 현재 페이지 번호 (1 또는 2)

function nextPage() {
  // 현재 페이지를 숨기고 반대편으로 이동한 다음 페이지를 보이게 함
  const currentPageElement = document.querySelector(`.page${currentPage}`);
  const nextPage = currentPage === 1 ? 2 : 1;
  const nextPageElement = document.querySelector(`.page${nextPage}`);

  // 현재 페이지를 위로 올리고, 반대편 페이지를 나타나도록 설정
  currentPageElement.style.transform = "translateY(-100%)";
  nextPageElement.style.transform = "translateY(0)";

  // 현재 페이지 업데이트
  currentPage = nextPage;
}
>>>>>>> 8c28332bef531262fad579d85edb95782ea971c0
