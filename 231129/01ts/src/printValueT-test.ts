import { printValueT, IValuable } from './printValue';
import { Valuable } from './Valuable';

printValueT(new Valuable(1));
printValueT({ value: true });

// 제네릭 치트키같이 사용가능 => <T>
// 제네릭 타입변수 : 타입 제약!!
