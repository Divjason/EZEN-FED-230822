const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(80, 100);
// ctx.lineTo(310, 100);
// ctx.lineTo(120, 250);
// ctx.lineTo(190, 30);
// ctx.lineTo(280, 250);
// ctx.lineTo(80, 100);
// ctx.closePath();
// ctx.stroke();

// ctx.globalAlpha = 0.8;
// ctx.fillStyle = 'rgb(255, 0, 0)';
// ctx.fillRect(50, 50, 100, 50);
// ctx.fillStyle = 'rgb(0, 0, 255)';
// ctx.fillRect(150, 50, 100, 50);
// ctx.fillStyle = 'rgb(0, 255, 0)';
// ctx.fillRect(250, 50, 100, 50);
// ctx.fillStyle = 'rgb(255, 255, 0)';
// ctx.fillRect(350, 50, 100, 50);

// ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
// ctx.fillRect(50, 50, 100, 50);
// ctx.fillStyle = 'rgba(0, 0, 255, 0.4)';
// ctx.fillRect(150, 50, 100, 50);
// ctx.fillStyle = 'rgba(0, 255, 0, 0.6)';
// ctx.fillRect(250, 50, 100, 50);
// ctx.fillStyle = 'rgba(255, 255, 0, 0.8)';
// ctx.fillRect(350, 50, 100, 50);

// let grad = ctx.createLinearGradient(0, 0, 0, 200);
// grad.addColorStop(0, '#000');
// grad.addColorStop(0.6, '#fff');
// grad.addColorStop(1, '#eee');

// ctx.fillStyle = grad;
// ctx.fillRect(0, 0, 100, 200);

// let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, 'white');
// radGrad.addColorStop(0.4, 'yellow');
// radGrad.addColorStop(1, 'orange');

// ctx.fillStyle = radGrad;
// ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
// ctx.fill();

// let img = new Image();
// img.onload = () => {
//   let pattern = ctx.createPattern(img, 'repeat');
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 500, 200);
// };
// img.src = './img/pattern.png';

// ctx.shadowColor = '#ccc';
// ctx.shadowOffsetX = 15;
// ctx.shadowOffsetY = 20;
// ctx.shadowBlur = 10;

// let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, 'white');
// radGrad.addColorStop(0.4, 'yellow');
// radGrad.addColorStop(1, 'orange');

// ctx.fillStyle = radGrad;
// ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
// ctx.fill();

// const lineCap = ['butt', 'round', 'square'];
// ctx.strokeStyle = '#222';

// for (let i = 0; i < lineCap.length; i++) {
//   ctx.lineWidth = 15;
//   ctx.lineCap = lineCap[i];
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.stroke();
// }

const lineJoin = ['bevel', 'miter', 'round'];
ctx.strokeStyle = '#222';

for (let i = 0; i < lineJoin.length; i++) {
  ctx.lineWidth = 20;
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(60, 60 * i + 50);
  ctx.lineTo(100, 60 * i + 15);
  ctx.lineTo(140, 60 * i + 50);
  ctx.stroke();
}
