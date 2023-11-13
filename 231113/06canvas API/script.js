// Canvas API => 2D 그래픽 요소, getContext()
// 자바스크립트에서는
// 1) 시간개념 : 밀리초 / 초
// 2) 좌표계 : 웹좌표계 / 데카르트좌표계
// 3) 각도 : 호도법(*라디언) / 육십분법(*도)

// 너무 안타깝게도 Canvas API 기본적으로 탑재가 되어있는 도형은  사각형밖에 없다!!! 삼각형, 원 => 커스터마이징 생성~!!

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// arc(x, y, r, 시작각도"래디언", 종료각도"래디언", 반시계방향으로=기본)

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
ctx.arc(280, 100, 50, 0, (Math.PI / 180) * 180, false);
ctx.fill();

ctx.beginPath();
ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
ctx.closePath();
ctx.stroke();

ctx.strokeStyle = 'blue';
ctx.moveTo(200, 100);
ctx.beginPath();
ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
ctx.stroke();
