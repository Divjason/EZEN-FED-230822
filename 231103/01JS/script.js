// Jop Positioning!!!
// Designer & Publisher & Frontend
// 지금 이 시점부터 배울 영역은 명확하게 FE (*필수)

// JS => 싱글 스레드 방식 = 단일 스레드(*방향 혹은 길) 언어
// JS => 태생적으로 동기처리 방식 하게 되어있다!!!

// JS 어떠한 명령 실행 완료 => 다음 단계!!
// 1(*복잡한 연산) => 2(*단순한 연산) => 3(*단순한 연산) =>

// 완화하기 위해서 명령체계 발생 : 비동기처리 방식 언어!!!
// 지금 시점에서 배우는가?
// http 웹 프로토콜 이전에 배웠던 JS : 내부 로컬컴퓨터 자체에서 명령어를 실행시키고 처리하는 문법
// 클라이언트, 서버, AJAX, Json (*외부 API로부터 데이터를 가져와야하는 문법을 어제부터 배우기 시작했다!!)

// JS의 동기처리방식 어떻게 이루어지는가

// const displayA = () => {
//   console.log("A");
// };

// const displayB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// 그렇다면, JS에서 비동기처리 방식이 지금까지봐온 Callback 함수 말고는 없나요?
// 2015년 전까지는 Y / 2015년 JS 대개혁의 해!!! ES6문법 => Promise / async & awit
// 구글 크롬 => 검색엔진 V9 => 워낙 JS paring 속도 능력이 워낙 뛰어났다!!!
// 개발자들이 JS를 웹브라우저 안에서만 사용하기가 너무 아깝다
// Node.js => JS 런타임 (*환경)
// 그동안 기존 Backend 개발자들의 전유물 (*서버 구축, 관리하던 JAVA, C++)
// 굳이 사용하지 않아도 Node.js 기반에서 JS만으로도 충분히 서버 구축하고 관리할 수 있는 시대!!
// 프론트엔드개발자 웹 브라우저 화면에서 전개되는 역동적인 페이지구성
// 회사.기업 => Node.js => 비싼 서버
// 도미노 => 웹퍼블리셔 / 긴장 / 기존 프론트엔드개발 리액트 & 제이쿼리 하드코딩!
// 백엔드 => 노드, 플러터 => 글로벌 UI 프레임워크
// 풀스택 (*프론트 + 백)
// 경계선 5~7년차 (*대부분 UI / 서버)
// 퍼블리셔

// 콜백함수를 활용한 비동기처리 예문
// const order = (coffee, callback) => {
//   console.log(`${coffee} 주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// const display = (result) => {
//   console.log(`${result} 준비완료!`);
// };

// order("아메리카노", display);

// JS 콜백함수를 활용 비동기처리의 취약점!!
// JS 콜백지옥

const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
      setTimeout(() => {
        console.log("D");
        setTimeout(() => {
          console.log("Stop!");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

displayLetter();

//이러한 콜백 지옥을 해소하기 위해서 나온것이 바로 JS 프로미스 객체!!
