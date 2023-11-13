// 정의해야하는 요소들!!!
const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = sliderContainer.querySelectorAll(".slide");
const slideCount = slides.length;
const pager = document.querySelector(".pager");

let currentIndex = 0;
let topHeight = 0;
let pagerHTML = "";

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
  pagerHTML += `<span data-idx="${i}">${i + 1}</span>`;
  pager.innerHTML = pagerHTML;
}
const pagerBtn = pager.querySelectorAll("span");
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
  for (let i = 0; i < pagerBtn.length; i++) {
    pagerBtn[i].classList.remove("active");
  }
  pagerBtn[i].classList.add("active");
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

// 페이저 버튼클릭으로 슬라이드 이동하기
for (let i = 0; i < pagerBtn.length; i++) {
  pagerBtn[i].addEventListener("click", (e) => {
    // data-idx 속성값을 활용해서 페이저 이동
    // console.log(e.target);
    // let pagerNum = e.target.getAttribute("data-idx");
    // goToslide(pagerNum);

    // 이벤트요소의 텍스트값을 활용해서 페이저 이동
    console.log(e.target.innerText);
    let pagerNum = e.target.innerText - 1;
    goToslide(pagerNum);
  });
}

// 자동슬라이드 함수
let timer = undefined;
const startAutoSlide = () => {
  timer = setInterval(() => {
    let nextIdx = (currentIndex + 1) % slideCount;
    goToslide(nextIdx);
  }, 4000);
};

startAutoSlide();

// 마우스오버 및 아웃시, 슬라이드 액션 이벤트
sliderWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer);
});
sliderWrapper.addEventListener("mouseleave", () => {
  startAutoSlide();
});
// 웹 브라우저 화면이 처음 시작될 때
goToslide(0);
