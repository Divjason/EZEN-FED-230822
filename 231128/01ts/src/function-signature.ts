// 고차함수에 대한 타입정의!!!

export type FirstOrderFunc<T, R> = (arg0: T) => R;
export type SecondOrderFunc<T, R> = (arg0: T) => FirstOrderFunc<T, R>;
export type ThirdOrderFunc<T, R> = (arg0: T) => SecondOrderFunc<T, R>;
