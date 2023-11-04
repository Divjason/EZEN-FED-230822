let num = 2.1234;

//*매개변수로 들어와있는 숫자중에서 가장 큰 값을 반환
let maxNum = Math.max(10, 5, 8, 30);
//*매개변수로 들어와있는 숫자중에서 가장 작은 값을 반환
let minNum = Math.min(10, 5, 8, 30);
//*매개변수로 들어와있는 숫자의 첫번째 소수점 자리수를 반올림하여 정수로 반환
let roundNum = Math.round(num);
//*매개변수로 들어와있는 숫자의 첫번째 소수점 자리수를 무조건 버림하여 정수로 반환
let floorNum = Math.floor(num);
//*매개변수로 들어와있는 숫자의 첫번째 소수점 자리수를 무조건 올림하여 정수로 반환
let ceilNum = Math.ceil(num);
//*0부터 1미만의 실수(*소수점을 가지고 있는 숫자)를 난수형태로 반환
let rndNum = Math.random();
//*원주율 상수를 반환
let piNum = Math.PI;

/*
document.write(maxNum, "<br/>");
document.write(minNum, "<br/>");
document.write(roundNum, "<br/>");
document.write(floorNum, "<br/>");
document.write(ceilNum, "<br/>");
document.write(rndNum, "<br/>");
document.write(piNum, "<br/>");*/

// 120~150사이의 정수를 랜덤값으로 추출하고 싶을 때!!!
document.write(Math.floor(Math.random() * 31) + 120);
