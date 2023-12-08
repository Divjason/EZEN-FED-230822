export type NumberToNumberFunc = (arg0: number) => number;
export const add = (a: number): NumberToNumberFunc => {
  const _add = (b: number): number => {
    return a + b;
  };
  return _add;
};
