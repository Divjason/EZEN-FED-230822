import { range } from 'range';
import { rangeGenerator } from './rangeGenerator';
let iterator = rangeGenerator(1, 4);
while (true) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value);
}

for (let value of rangeGenerator(4, 7)) {
  console.log(value);
}
