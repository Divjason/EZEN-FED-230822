const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(1, 0.7);

ctx.fillStyle = 'green';
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();

ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.arc(120, 80, 20, 0, (Math.PI / 180) * 180 * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
ctx.stroke();

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(120, 80, 5, 0, (Math.PI / 180) * 180 * 2, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 5, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(150, 150, 50, 0, (Math.PI / 180) * 180, false);
ctx.lineWidth = 3;
ctx.stroke();
