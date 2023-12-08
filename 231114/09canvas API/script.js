const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;

  this.dx = Math.floor(Math.random() * 4) + 1;
  this.dy = Math.floor(Math.random() * 4) + 1;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, (Math.PI / 180) * 180 * 2, false);
    ctx.fill();
  };

  this.animate = function () {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.draw();
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

// for (let i = 0; i < objs.length; i++) {
//   objs[i].draw();
// }

const update = () => {
  // 궤적이 남지 않도록 캔버스가 계속 지워주기
  // 반복문 for문 활용해서 색상, 위치, 크기 랜덤
  // 총 20개의 원이 모두 동일하게 랜덤값을 적용받아야 한다
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    obj.animate();
  }
  requestAnimationFrame(update);
};

update();
