// 내부적으로 JS 코드를 관리할 수 있는 문법
// 변수, 객체, 함수, 자료형, 조건문, 반복문 등등

// 외부에있는 데이터를 찾아와서 관리할 수 있는 문법
// XMLHttpRequest / 동기 & 비동기 / 클라이언트, 서버
// 동일한 형식 데이터 => JSON
// 외부에서 데이터를 가져오는데 있어서 데이터를 받아오는 순서 혹은 데이터를 사용해야하는 순서!!!!
// JS 동기처리 방식 프로그래밍 언어!!!!
// 비동기처리 방식 => CB / Promise / fetch

// 왜 우리가 외부에서 데이터를 끌어와서 사용해야 하는지를
// API 데이터를 끌어오는 방식 => 카카오맵 / 공공데이터포털 전국 데이터

// API : Application Programming Interface
// UI / UX
// 일상생활에서 API
// 버스, 지하철 (*카카오맵) => 공개 API

// 네이버, 카카오, 구글, 페이스북, 공공데이터포털

// 외부기업 및 정부에서 제공하는 것만 API?
// HTML5 => API 존재!!!

// 웹 & 앱 서비스 변화

// 가장많이 사용하는 API => 위치기반서비스
// 기본적으로 탑재되어있는 API => Geolocation / Storage
// 웹에서 클라이언트 & 서버가 서로 데이터를 주고받을 때,
// 사용할 수 있는 공간!!! cookie

// 데이터를 저장하고 관리하면서 & 보안까지 신경쓸 수 있는 저장소?
// Storage => 얼마나, 어느기간까지? 10기가 20군데 / 500메가
// 세션스토리지 : 웹브라우저 창을 여는 순간 작동 ~ 웹브라우저 창을 닫는 순간 데이터 모조리 삭제!!
// 로컬스토리지 : 아무리 세션이 종료가 되어도 서버혹은 클라이언트에서 임의로 데이터를 삭제하지 않는다면 영구적으로 보관.관리

// API 기반으로 움직이는 것이기 때문에
// Storage API 객체는 다음과 같은 프로퍼티(*속성) & 메서드(*함수)를 사용할 수 있습니다.

// length 프로퍼티 : 배열안에 담겨있는 아이템 개수 확인
// setItem() : 스토리지에 자료를 저장할 때 사용할 수 있는 메서드
// getItem() : 스토리지에 저장되어있는 자료를 가져올 때 사용할 수 있는 메서드
// key() : 스토리지에 있는 키를 반환해주는 메서드
// 기본적으로 스토리지에는 key:value 값이 한 쌍으로 보관됩니다.
// removeItem(key) : 키이름을 매개변수 값을 지정할 경우, 해당 키를 삭제!!
// clear() : 현재 스토리지에 저장되어있는 모든 키/값을 모두 삭제!!!

let students = ["Kim", "Lee", "Park"];
localStorage.setItem("students", JSON.stringify(students));

let localData;
if (localStorage.getItem("students") === null) {
  localData = [];
} else {
  localData = JSON.parse(localStorage.getItem("students"));
}

localData.push("Choi");
console.log(`추가 후 students : ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

const indexOfValue = localData.indexOf("Lee");
localData.splice(indexOfValue, 1);
console.log(`삭제 후 students : ${localData}`);
localStorage.setItem("students", JSON.stringify(localData));

localStorage.removeItem("students");
