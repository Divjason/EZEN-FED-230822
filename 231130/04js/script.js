// 우리가 정의해야할 요소!!
// 1) 스크롤 위치 // 2) 각각의 도형이미지
// 3) 현재의 마우스 위치 좌표값
// 4) 마우스가 이동했을 때, 이동한 위치까지 따라가야하는 타겟값
// 5) 목표값대비, 타겟값이 따라오는 속도에 정의

const imageAll = document.querySelectorAll('.imageWrap .parallaxImage');
const totalNum = imageAll.length;
const subPageImage = document.querySelector('.subPage .parallaxImage');

let scrollNum = 0;
let x = 0;
let targetX = 0;
let speed = 0.1;

window.addEventListener('scroll', () => {
  scrollNum = window.scrollY;
  imageAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${
        -scrollNum / (2 * (totalNum - index))
      }px)`;
    }
  });
});

window.addEventListener('mousemove', (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `scale(1.05) translate(${-targetX / 200}px, ${
    -scrollNum / (2 * (totalNum - 4))
  }px)`;
  imageAll[5].style.transform = `scale(1.05) translate(${-targetX / 100}px, ${
    -scrollNum / (2 * (totalNum - 5))
  }px)`;
  subPageImage.style.transform = `scale(1.1) translateX(${-targetX / 20}px)`;
  window.requestAnimationFrame(loop);
};
loop();
