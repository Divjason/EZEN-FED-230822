window.onload = function () {
  const kindWrap = document.querySelector(".kind_wrap");
  const slider = kindWrap.querySelector(".slider");
  const slideLis = slider.querySelectorAll("li");
  const moveButton = kindWrap.querySelector(".arrow");

  /* 클론 */
  const clone1 = slideLis[0].cloneNode(true);
  const cloneLast = slideLis[slideLis.length - 1].cloneNode(true);
  slider.insertBefore(cloneLast, slideLis[0]);
  slider.appendChild(clone1);

  /* 주요 변수 초기화 */
  let currentIdx = 0;
  let translate = 0;
  const speedTime = 3000;

  /* CSSOM 셋업 */
  const sliderCloneLis = slider.querySelectorAll("li");
  const liWidth = slideLis[0].clientWidth;
  const sliderWidth = liWidth * sliderCloneLis.length;
  slider.style.width = `${sliderWidth}px`;
  currentIdx = 1;
  translate = -liWidth;
  slider.style.transform = `translateX(${translate}px)`;

  /* 리스너 설치하기 */
  moveButton.addEventListener("click", moveSlide);

  /* 슬라이드 실행 */
  function move(D) {
    currentIdx += -1 * D;
    translate += liWidth * D;
    slider.style.transform = `translateX(${translate}px)`;
    slider.style.transition = `all ${speedTime}ms ease`;
  }

  /* 클릭 버튼 */
  function moveSlide(event) {
    event.preventDefault();
    if (event.target.className === "next") {
      move(-1);
      if (currentIdx === sliderCloneLis.length - 1)
        setTimeout(() => {
          slider.style.transition = "none";
          currentIdx = 1;
          translate = -liWidth;
          slider.style.transform = `translateX(${translate}px)`;
        }, speedTime);
    } else {
      move(1);
      if (currentIdx === 0) {
        setTimeout(() => {
          slider.style.transition = "none";
          currentIdx = sliderCloneLis.length - 2;
          translate = -(liWidth * currentIdx);
          slider.style.transform = `translateX(${translate}px)`;
        }, speedTime);
      }
    }
  }
  function sliding() {
    move(-1);
    if (currentIdx === sliderCloneLis.length - 1)
      setTimeout(() => {
        slider.style.transition = "none";
        currentIdx = 1;
        translate = -liWidth;
        slider.style.transform = `translateX(${translate}px)`;
      }, speedTime);
  }

  function showSliding() {
    setInterval(sliding, 1500);
  }

  showSliding();
};
