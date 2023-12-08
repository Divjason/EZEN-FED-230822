// 객체 혹은 배열에서 특정 인덱스 값을 가지고 있는 속성만 추려서 객체를 만들고자 할 때!!!

// const obj = {
//   name: 'Jane',
//   age: 22,
//   city: 'Seoul',
//   country: 'Korea',
// };

// pick(obj, ['name', 'age']);

// export const pick = (obj, keys) =>
//   keys
//     .map((key) => ({ [key]: obj[key] }))
//     .reduce((result, value) => ({ ...result, ...value }), {});

// keyof 라는 연산자는 특정 객체 안에 포함된 키를 인자값으로 받아서 반복문형태로 구문을 작성하고자 할 때, 해당 객체와 키의 상관관계를 규명하기위한 타입 연산자!!!

export const pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys
    .map((key) => ({ [key]: obj[key] }))
    .reduce((result, value) => ({ ...result, ...value }), {});
