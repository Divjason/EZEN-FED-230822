// JS 객체 : 자료를 저장하고 처리하는 기본 단위!
/*let shoeDog = {
  author: "phil knight",
  category: "social",
  pages: 500,
  price: 19800,
};*/

// JS 객체를 생성하는 방법!!!
// 1) 함수형 생성 방법 (*내장함수)
/*let tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function () {
  document.write(`tv색상 : ${tv.color} <br/>`);
  document.write(`tv가격 : ${tv.price} <br/>`);
};
document.write(`<h1>tv 객체 메서드 호출</h1>`);
tv.info();*/

// 2) 속성 설정 방법
/*let car = {
  color: "black",
  price: 5000000,
  info: function () {
    document.write(`car색상 : ${car.color} <br/>`);
    document.write(`car가격 : ${car.price} <br/>`);
  },
};
document.write(`<h1>car 객체 메서드 호출</h1>`);
car.info();*/

// this 객체 => 메서드 (*method) : 함수형태 종류 중 하나

// 객체 & 메서드 : 재활용이 가능한 객체 및 메서드
let test = {
  avg: function (math, science) {
    return math + science;
  },
};

document.write(test.avg(300, 400));

// 객체 & 메서드 : 재활용이 일부 가능한 객체 및 메서드
let cloud02 = {
  math: 50,
  science: 100,
  avg: function () {
    return this.math + this.science;
  },
};

document.write(cloud02.avg());
