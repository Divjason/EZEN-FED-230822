import { IValuable } from './IValuable';

// 제네릭 타입의 제약!!!
export const printValueT = <Q, T extends IValuable<Q>>(o: T) =>
  console.log(o.value);

export { IValuable };
