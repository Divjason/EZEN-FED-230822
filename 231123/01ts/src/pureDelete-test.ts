import { pureDelete } from './pureDelete';

const mixedArray: ([] | string[] | { name: string })[] = [
  [],
  { name: 'Jack' },
  ['description'],
];

const objectsOnly: object[] = pureDelete(mixedArray, (val) =>
  Array.isArray(val)
);
console.log(mixedArray, objectsOnly);
