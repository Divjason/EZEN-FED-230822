const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Canvas API (*옵셔널하게 알아두면 좋을듯!!)
// 2D 이미지를 생성하기 위한 환경설정
// 사각형을 만들기위한 방법
// 삼각형, 원을 만들기위한 방법
// 텍스트를 입력하는 방법

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

img.src = './img/cat.jpg';
