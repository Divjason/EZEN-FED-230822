const canvas = document.querySelector('#canvas');
const toolbar = document.querySelector('#toolbar');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

const ctx = canvas.getContext('2d');

let isDrawing = false;
let startX;
let startY;
let lineWidth = 2;

toolbar.addEventListener('change', (e) => {
  if (e.target.id === 'stroke') {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === 'lWidth') {
    lineWidth = e.target.value;
  }
});

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});
