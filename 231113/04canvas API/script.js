// Canvas API => 2D 그래픽 요소, getContext()
// 자바스크립트에서는
// 1) 시간개념 : 밀리초 / 초
// 2) 좌표계 : 웹좌표계 / 데카르트좌표계
// 3) 각도 : 호도법(*라디언) / 육십분법(*도)

// 너무 안타깝게도 Canvas API 기본적으로 탑재가 되어있는 도형은  사각형밖에 없다!!! 삼각형, 원 => 커스터마이징 생성~!!

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 200);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 100);
ctx.lineTo(50, 150);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 100);
ctx.lineTo(250, 50);
ctx.lineTo(250, 150);
ctx.closePath();
ctx.fillStyle = 'rgb(0, 200, 0)';
ctx.fill();
