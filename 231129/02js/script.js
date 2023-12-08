// JS구문은 정의만 잘 해도 반은 먹는다!!!

// 스크롤의 위치에 따라서 h1태그에 담겨야하는 텍스트 값이 변경되어야함!!
const h1 = document.querySelector('h1');

// 스크롤의 위치에 따라서 상단 bar의 채움정도도 변경되어야함!!
const progressBar = document.querySelector('.bar');

// 스크롤을 내리게되었을 때, 위치 값!! 100
let scrollNum = 0;

// 현재 내가 작업중인 전체 문서의 높이 값!! 5000
let documentHeight = 0;

// 전체문서의 높이 값 대비 스크롤의 위치 값 = %
let per = 0;

const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight - window.innerHeight;
  per = percent(scrollNum, documentHeight) + '%';
  h1.innerText = per;
  progressBar.style.width = per;
});
