// 정의해야하는 요소들!!!
const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = sliderContainer.querySelectorAll(".slide");
const slideCount = slides.length;

let currentIndex = 0;
let topHeight = 0;

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

// 개별 슬라이드 컨텐츠 높이값 지정함수
const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();

// 개별 슬라이드 가로배열
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
}

// 버튼기능 업데이트함수
const updateNav = () => {
  // 인덱스가 처음인경우
  if (currentIndex === 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }
  // 인덱스가 마지막인경우
  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
};

// 슬라이드 이동함수
const goToslide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  // updateNav();
};

// 버튼 클릭 시, 이벤트
navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    // 현재 인덱스값이 처음이 아닌 경우
    goToslide(currentIndex - 1);
  } else {
    // 현재 인덱스값이 처음인 경우
    goToslide(slideCount - 1);
  }
});

navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    // 현재 인덱스값이 마지막이 아닌 경우
    goToslide(currentIndex + 1);
  } else {
    // 현재 인덱스값이 마지막이 아닌 경우
    goToslide(0);
  }
});

// 웹 브라우저 화면이 처음 시작될 때
goToslide(0);
