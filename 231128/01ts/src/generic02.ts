// 함수에 입력된 인자값이 그대로 본인의 타입으로 반환될 때, 타입정의!!!! type 별칭을 가지고 진행한다!!!

type MapFunc<T, R> = (arg0: T) => R;
type IdentityFunc<T> = MapFunc<T, T>;

const numberIdentity: IdentityFunc<number> = (x: number): number => x;
const stringIdentity: IdentityFunc<string> = (x: string): string => x;
