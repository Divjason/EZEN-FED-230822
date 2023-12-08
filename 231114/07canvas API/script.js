const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 180 * 2, false);
    ctx.fill();
  };
}

// const circleOne = new Circle(100, 100, 50, 'red');
// const circleTwo = new Circle(200, 200, 20, 'blue');
// const circleThree = new Circle(350, 30, 40, 'yellow');
// const circleFour = new Circle(500, 270, 80, 'darkgreen');
// const circleFive = new Circle(550, 80, 50, 'gray');
// circleOne.draw();
// circleTwo.draw();
// circleThree.draw();
// circleFour.draw();
// circleFive.draw();

const objs = [];
for (let i = 0; i < 20; i++) {
  const radius = Math.floor(Math.random() * 50) + 10;
  const x = Math.floor(Math.random() * (canvas.width - radius * 2)) + radius;
  const y = Math.floor(Math.random() * (canvas.height - radius * 2)) + radius;
  const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  objs.push(new Circle(x, y, radius, color));
}
console.log(objs);

for (let i = 0; i < objs.length; i++) {
  objs[i].draw();
}
