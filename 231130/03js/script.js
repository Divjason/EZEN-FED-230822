// 사전에 정의해야할 내용부터 정리해보도록 하겠습니다!!!

// 조건 : 마우스휠이 스크롤이 되면
// 1.효과 : 상단부가 사라짐
// 2.효과 : 하단부가 밑에서 올라옴
// 3.효과 : 중간 부분에서 프로그래스바 & 헤드영역이 나타남

// 우리의 컴퓨터의 스크롤이동에대한 값을 도출!!!
// => window.scrollY => 값을 도출!!!

// 위 값이 도출된다면, 위에 정리한 1~3번까지의 이벤트가 발생되어야 한다. => addEventListener

// 상단부가 없어지려면, 상단부가 무엇인지를 컴퓨터에게 알려줘야함
// 상단부 : 헤더, 메인및서브 타이틀, 프로그래스바, 커버 랩, 필터

// 위에 효과인 상단부가 없어지게 됨과 동시에 하단부가 위로 올라옴
// 하단부 : 컨텐츠 랩

// 어차피 컴퓨터에게 알려줘야 하는 정의부터 하고 갑시다!!!
const header = document.querySelector('header');
const coverTitle = document.querySelector('.coverTitle');
const progressBar = document.querySelector('.bar');
const coverWrap = document.querySelector('.coverWrap');
const dimd = document.querySelector('.dimd');
const contWrap = document.querySelector('.contWrap');

// 내가 내리고있는 마우스 휠에 따른 스크롤의 위치
// 그 스크롤의 위치가 전체 문서에서 얼만큼의 위치를 차지하고 있는지
// => 전체 문서대비 %(비율)
let scrollNum = 0;
let documentHeight = 0;
let per = 0;
// 현재 내 눈으로 볼 수 있는 화면 영역의 높이 (*굳이 스크롤을 하지 않아도 되는 영역)
const coverHeight = window.innerHeight;
coverWrap.style.height = coverHeight + 'px';
contWrap.style.marginTop = coverHeight + 'px';

// 현재의 스크롤 위치에 대한 %를 구하는 공식을 담고 있는 함수
const percent = (num, totalNum) => {
  return ((num / totalNum) * 100).toFixed(0);
};

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight;
  per = percent(scrollNum, documentHeight);
  progressBar.style.width = per + '%';

  if (scrollNum >= coverHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
    coverTitle.style.top = `${-scrollNum / 5}px`;
    coverWrap.style.backgroundPosition = `center ${-scrollNum / 15}px`;
    dimd.style.backgroundColor = `rgba(0, 0, 0, ${0.4 + scrollNum / 1000})`;
  }
});
