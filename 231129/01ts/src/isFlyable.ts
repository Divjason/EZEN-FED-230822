import { Bird, Fish } from './BirdAndFish';

// 타입스크립트에서 타입에 대한 정의를 할 때, 조건에 따른 타입정의를 해야할 필요가 있을 때가 있다!!!
// 타입가드라는 기능을 사용해야 하는데,
// 객체 instanceof 타입
// 객체 as 타입 (*타입단언)
// 객체 is 타입 (*is연사자를 사용해서 타입가드를 주는 경우!)

export const isFlyable = (o: Bird | Fish): o is Bird => {
  return o instanceof Bird;
};

// 이론적인 내용들을 어렵게 => 실제로는 더 쉬운 사례!!!
