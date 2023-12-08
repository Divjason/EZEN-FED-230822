import { Bird, Fish } from './BirdAndFish';

// 타입 가드!!! (*센터, 포워드, 가드)
// 타입의 가드를 만드는 방법
// 1) instanceof 연산자 : 객체 instanceof 타입
// 타입단언 을 사용해주면 더욱 완벽!!!
// 타입단언 : 객체 as 타입
export const flyOrSwim = (o: Bird | Fish): void => {
  if (o instanceof Bird) {
    (o as Bird).fly();
  } else if (o instanceof Fish) {
    (o as Fish).swim();
  }
};
