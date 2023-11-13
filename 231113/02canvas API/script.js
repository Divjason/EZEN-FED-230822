const canvas = document.querySelector('canvas');
// Canvas API => 2D 그래픽 요소, getContext()

const ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(200, 0, 0)';
ctx.fillRect(10, 10, 50, 100);

// 자바스크립트에서는
// 1) 시간개념 : 밀리초 / 초
// 2) 좌표계 : 웹좌표계 / 데카르트좌표계
// 3) 각도 : 호도법(*라디언) / 육십분법(*도)
