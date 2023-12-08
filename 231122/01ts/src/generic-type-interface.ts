// const identity = <T>(n: T): T => n;
// console.log(identity<boolean>(true), identity(true));

const f = <T>(cb: (arg: T, i?: number) => number): void =>
  console.log('Hello World');
