const showImagesButton = document.getElementById("showImagesButton");
const leftPanel = document.querySelector(".left-panel");
const rightPanel = document.querySelector(".right-panel");

showImagesButton.addEventListener("click", () => {
  // 이미지가 보이지 않는 상태라면 보이도록, 보이는 상태라면 사라지도록 토글
  if (leftPanel.style.opacity !== "0") {
    leftPanel.style.opacity = "0";
    rightPanel.style.opacity = "0";
    // 다른 페이지로 이동
    window.location.href = "https://www.naver.com";
  } else {
    leftPanel.style.opacity = "1";
    rightPanel.style.opacity = "1";
  }
});
