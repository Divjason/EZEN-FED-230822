const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// canvas API
// 도형 => 네모(*내장메서드), 원, 선, 삼각형, 호
// beginPath() / fillStyle, strokeStyle
// fillRect(), strokeRect()
// moveTo(), lineTo(), clearRect()
// 실전예제 : 웹 그림판

// 원점의 위치를 옮기는 메서드 = translate()

ctx.fillStyle = '#ccc';
ctx.fillRect(10, 10, 100, 100);
ctx.save();

ctx.translate(150, 150);

ctx.fillStyle = '#222';
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = '#f00';
ctx.fillRect(50, 50, 80, 20);

ctx.restore();
