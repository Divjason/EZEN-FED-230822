const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// 투명 및 불투명도를 적용할 수 있는 첫 번째 방법
// ctx.globalAlpha = 0.3;

// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.fillRect(50, 50, 100, 50);
// ctx.fillStyle = 'rgb(0, 0, 255)';
// ctx.fillRect(150, 50, 100, 50);
// ctx.fillStyle = 'rgb(0, 255, 0)';
// ctx.fillRect(250, 50, 100, 50);
// ctx.fillStyle = 'rgb(255, 255, 0)';
// ctx.fillRect(350, 50, 100, 50);

// 투명 및 불투명도를 적용할 수 있는 두 번째 방법
ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
ctx.fillRect(50, 50, 100, 50);
ctx.fillStyle = 'rgba(0, 0, 255, 0.4)';
ctx.fillRect(150, 50, 100, 50);
ctx.fillStyle = 'rgba(0, 255, 0, 0.6)';
ctx.fillRect(250, 50, 100, 50);
ctx.fillStyle = 'rgba(255, 255, 0, 0.8)';
ctx.fillRect(350, 50, 100, 50);
