// 제네릭(*Generic) 타입 = 종합적인 타입 정의!!!
// 종합병원 = General Hospital
// 배열의 타입을 정의 할 때, number[]
// 고정타입
// const sample = ['hello', 1, 2, { name: 'park' }];

// 타입 변수 : Type variable
export const arrayLength = <T>(array: T[]): number => array.length;
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) == 0;
