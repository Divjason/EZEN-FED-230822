// 반복기!!!!
// 이터러블 객체 => 아이템 반복 실행
// 이터레이터 심볼객체
// next()

// 생성기 = 제너레이터!!

export function* generator() {
  console.log('generator started...');
  let value = 1;
  while (value < 4) {
    yield value++;
  }
  console.log('generator finished...');
}
