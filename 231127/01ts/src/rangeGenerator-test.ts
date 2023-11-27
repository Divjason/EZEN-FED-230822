import { rangeGenerator } from './rangeGenerator';

// function* + yield => 제너레이터 함수!!!
// 이터러블 객체들의 전유물 => for of 등의 반복실행문 구현
// 이터러블 객체 => 이터레이터 심볼객체 => next()
// 이터러블 객체가 가지고 있는 아이템을 하나씩 가져와서 출력, 아직 아이템이 남아있으면 true, 반복할 수 있는 아이템이 없으면 false

let iterator = rangeGenerator(1, 4);
while (true) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value);
}

for (let value of rangeGenerator(4, 7)) {
  console.log(value);
}
