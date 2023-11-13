const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
linGrad.addColorStop(0, '#000');
linGrad.addColorStop(0.5, '#fff');
linGrad.addColorStop(1, '#eee');

ctx.fillStyle = linGrad;
ctx.fillRect(0, 0, 100, 200);
