/*
let season = [];
season[0] = "spring";
season[1] = "summer";
console.log(season);
*/

/*
let pets = ["dog", "cat", "parrot"];
console.log(pets);
*/

/*
let fruits = new Array("사과", "복숭아", "포도");
console.log(fruits);
*/

/*
let pets = ["dog", "cat", "parrot"];
console.log(pets[1]);
*/

/*
let fruits = new Array("사과", "복숭아", "포도");

fruits[4] = "배";
console.log(fruits);
*/

// 배열을 배우는 목적 : 특정 상황에서 배열안에 담겨있는 값을 반복해서 어떤 이벤트 및 액션을 취하기 위한 목적!!! for문 아주 친하다!!!

let colors = ["red", "green", "blue", "white", "black"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 변칙성의 for문
// 배열 => 객체

// 매개변수 혹은 인자값이 1개인 경우!!!
let animals = ["lion", "bear", "bird"];
animals.forEach((animal) => {
  console.log(animal);
});

// 매개변수 혹은 인자값이 2개인 경우!!!
animals.forEach((animal, index) => {
  console.log(`animals[${index}] : ${animal}`);
});

// 매개변수 혹은 인자값이 3개인 경우!!!
animals.forEach((animal, index, array) => {
  console.log(`[${array}] [${index}] : ${animal}`);
});
