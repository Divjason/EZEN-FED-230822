// 무엇을 정의해야하는가?
// 1) 마우스 스크롤 휠 이동에 따른 스크롤값
// 2) 상단부, 7장의 이미지 각각에 대한 정의

// 스크롤이동에 따른 위치값
let scrollNum = 0;

// 총 7장의 이미지 정의
const imageAll = document.querySelectorAll('.imageWrap .parallaxImage');

// 총 7장의 이미지 개수를 정의
const totalNum = imageAll.length;

// 마우스 스크롤 휠 이동에 따른 이벤트 정의!!
window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  if (scrollNum < 2500) {
    imageAll.forEach((item, index) => {
      item.style.transform = `perspective(400px) translate3d(0, 0, ${
        scrollNum / (2 * (totalNum - index))
      }px)`;
    });
  }
});
