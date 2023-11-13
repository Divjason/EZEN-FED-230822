// JS 팝업창 생성하기!
// window.open(경로, 창 이름, 창 옵션)

const btn = document.querySelector("button");
let openPopup = () => {
  window.open(
    "notice.html",
    "이벤트팝업",
    "width=600 height=500 left=300 top=200"
  );
};
btn.addEventListener("click", openPopup);
