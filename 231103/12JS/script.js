// 공통페이지 : index.html
// 라우팅(*분기)페이지(1) : home.html / game.html / jukebox.html
// 라우팅(*분기)페이지(2) : home.css / game.css / jukebox.css
// 라우팅(*분기)페이지(3) : home.js / game.js / jukebox.js

// 리액트 => 각각의 html페이지, 모든 html의 역할을 해야하는 페이지들을 js => 각 모듈화시켜서 메인js

// float

// 각 탭을 클릭하면 => 해당 탭에 연관성이 있는 페이지가 나와야한다.
// 페이지가 나옴과 동시에 오른쪽 탭의 스타일 변경되어야 한다.
// 선택된 탭의 경우, 배경컬러가 흰색 & 폰트컬러는 검정

const menuHome = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./home.html");
  document.querySelector("#menuHome").style = "color: #000; background: #fff";
  document.querySelector("#menuGame").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuJukebox").style =
    "color: #fff; background: #298eb5";
};

const menuGame = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./game.html");
  document.querySelector("#menuHome").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuGame").style = "color: #000; background: #fff";
  document.querySelector("#menuJukebox").style =
    "color: #fff; background: #298eb5";
};

const menuJukebox = () => {
  document.querySelector("#contentFrame").setAttribute("src", "./jukebox.html");
  document.querySelector("#menuHome").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuGame").style =
    "color: #fff; background: #298eb5";
  document.querySelector("#menuJukebox").style =
    "color: #000; background: #fff";
};
