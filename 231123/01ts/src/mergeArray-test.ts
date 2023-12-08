import { mergeArray } from './mergeArray';

const mergeArray1: string[] = mergeArray(['Hello'], ['World']);
console.log(mergeArray1);

const mergeArray2: number[] = mergeArray([1], [2, 3], [4, 5, 6], [7, 8, 9, 10]);
console.log(mergeArray2);
