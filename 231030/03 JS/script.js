// 배열안에 특정한 값을 추가하거나 제거할 때 사용할 수 있는 메서드!!

/*
push(); // 배열에 맨 마지막 값으로 추가
pop(); // 배열에 맨 마지막 값을 제거
unshift(); // 배열에 맨 첫번째 값을 추가
shift(); // 배열에 맨 첫번째 값을 제거
*/

let animals = ["lion", "bear", "bird"];
console.log(animals);
animals.pop();
console.log(animals);
animals.push("tiger");
console.log(animals);
animals.shift();
console.log(animals);
animals.unshift("rabbit");
console.log(animals);
