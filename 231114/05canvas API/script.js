const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// destination
ctx.fillStyle = '#ccc';
ctx.fillRect(100, 50, 100, 100);

ctx.globalCompositeOperation = 'xor';
// source-over / source-in / source-out / source-atop
// destination-over / destination-in / destination-out / destination-atop
// lighter / copy / xor

// source
ctx.fillStyle = '#222';
ctx.beginPath();
ctx.arc(180, 120, 50, 0, (Math.PI / 180) * 180 * 2, false);
ctx.fill();
