// Canvas API => 2D 그래픽 요소, getContext()
// 자바스크립트에서는
// 1) 시간개념 : 밀리초 / 초
// 2) 좌표계 : 웹좌표계 / 데카르트좌표계
// 3) 각도 : 호도법(*라디언) / 육십분법(*도)

// 너무 안타깝게도 Canvas API 기본적으로 탑재가 되어있는 도형은  사각형밖에 없다!!! 삼각형, 원 => 커스터마이징 생성~!!

// arc(x, y, r, 시작각도"래디언", 종료각도"래디언", 반시계방향으로=기본)

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 타원을 만드는 첫번째 방법
// ctx.strokeStyle = 'red';
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, Math.PI * 2);
// ctx.stroke();

// ctx.strokeStyle = 'blue';
// ctx.beginPath();
// ctx.ellipse(150, 200, 80, 50, (Math.PI / 180) * -30, 0, Math.PI * 2);
// ctx.stroke();

// 2차 베지에~!!

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

// 3차 베지에~!!

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(50, 100);
ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx.stroke();
