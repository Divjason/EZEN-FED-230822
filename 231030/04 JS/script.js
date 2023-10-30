// splice() : 배열 내 원하는 위치에 요소를 추가하거나 제거할 때 사용하는 메서드!!!

// 특정 위치부터 끝까지 요소를 제거하고 싶을 때!!
let subjects = ["html", "css", "javascript", "react", "typescript"];
console.log(subjects);

subjects.splice(2);
console.log(subjects);

// splice() 메서드 안에 매개변수가 2개일 때!!
let week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
console.log(week);
week.splice(1, 5);
console.log(week);

// slice() : 배열안에 원하는 위치에 있는 값을 추출하고, 추가하는 메서드

let color = ["red", "green", "blue", "white", "black"];
console.log(color);
console.log(color.slice(2));
console.log(color);
console.log(color.slice(1, 4));
