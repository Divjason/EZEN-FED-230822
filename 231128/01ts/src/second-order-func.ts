import { FirstOrderFunc, SecondOrderFunc } from './function-signature';

export const add: SecondOrderFunc<number, number> =
  (x: number): FirstOrderFunc<number, number> =>
  (y: number): number =>
    x + y;
