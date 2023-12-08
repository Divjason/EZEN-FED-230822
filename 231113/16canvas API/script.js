const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.src = './img/bird.jpg';

ctx.beginPath();
ctx.arc(300, 200, 150, 0, (Math.PI / 180) * 180 * 2, false);
ctx.clip();
