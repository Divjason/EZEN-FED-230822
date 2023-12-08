// JS에서 map 함수는 언제 사용할까요?
// map 메서드 안에 정의한 커스텀 조건식에 따라서 새로운 배열을 만들어주는 역할!!!!

export const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q
): Q[] => {
  let result: Q[] = [];
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    result = [...result, callback(value, index)];
  }
  return result;
};
