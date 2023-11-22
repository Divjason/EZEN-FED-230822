// JS 배열에서 join이라는 메서드는 어떤 역할을 할까?
// split <-> 배열의 아이템으로 구분되어있는 요소들 하나로 합쳐서 문자열로 만들어주는 메서드 : join

export const join = (strArray: string[], delim: string = ''): string =>
  strArray.join(delim);
