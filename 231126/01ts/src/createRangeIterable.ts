export const createRangeIterable = (from: number, to: number) => {
  let currentValue = from;
  let finalValue = to;
  return {
    next() {
      const value = currentValue < finalValue ? currentValue++ : undefined;
      const done = value == undefined;
      return { value, done };
    },
  };
};

export class RangeIterable {
  // 오버로드
  // 생성자함수 (*접근제한자)
  constructor(public from: number, public to: number) {}
  [Symbol.iterator]() {
    const that = this;
    let currentValue = that.from;
    return {
      next() {
        const value = currentValue < that.to ? currentValue++ : undefined;
        const done = value == undefined;
        return { value, done };
      },
    };
  }
}
