const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(80, 100);
ctx.lineTo(310, 100);
ctx.lineTo(120, 250);
ctx.lineTo(190, 30);
ctx.lineTo(280, 250);
ctx.lineTo(80, 100);
ctx.closePath();
ctx.stroke();
