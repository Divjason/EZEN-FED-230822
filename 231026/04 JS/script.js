// 프로토타입을 상속하는 새로운 객체를 생성하는 방법
// 2가지 나눠서
// 1) 고전적인 방식, 생성자 함수를 활용해서 객체를 생성하는 방법
// 2) class를 활용한 생성자 함수를 만들어서 객체를 생성하는 방법

// Book 이라는 생성자 함수를 정의!!
function Book(title, price) {
  this.title = title;
  this.price = price;
}

// Book 이라는 생성자 함수에 새로운 메서드(*함수)를 정의하고 삽입!!!
Book.prototype.buy = function () {
  console.log(`${this.title}을 ${this.price}원에 구매하였습니다.`);
};

// 생성자 함수를 통해서 생성된 Book이라는 프로토타입 객체를 활용해서 인스턴스 객체를 만들어보자!!

const book1 = new Book("해리포터", 10000);
book1.buy();

function Textbook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}

Textbook.prototype.buyTextbook = function () {
  console.log(`${this.major} 전공 서적, ${this.title}을 구매했습니다.`);
};

Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("자바스크립트", 20000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();
