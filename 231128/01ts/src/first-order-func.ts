import { FirstOrderFunc } from './function-signature';

export const inc: FirstOrderFunc<number, number> = (x: number): number => x + 1;
