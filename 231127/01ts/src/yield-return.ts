export function* gen() {
  let count = 5;
  let select = 0;
  while (count--) {
    select = yield `you select ${select}`;
  }
}

export const random = (max: number, min: number = 0) => {
  return Math.round(Math.random() * (max - min)) + min;
};
