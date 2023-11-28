// 목표지점에 대한 정의 (*마우스 좌표)
let x = 0;
let y = 0;

// 타겟지점에 대한 정의 (*동그라미 좌표)
let targetX = 0;
let targetY = 0;

// 속도 정의
const speed = 0.09;

// DOM에서 찾아와야하는 값들에 대한 정의
// 시간 => 코드!!
// 개념구조!!!

const cursorItem = document.querySelector('.cursorItem');
const circle = cursorItem.querySelector('.circle');
const buttonAll = document.querySelectorAll('a');

buttonAll.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    circle.style.transform = 'scale(0.3)';
  });
  item.addEventListener('mouseleave', () => {
    circle.style.transform = 'scale(1)';
  });
});

window.addEventListener('mousemove', (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  window.requestAnimationFrame(loop);
};

loop();
