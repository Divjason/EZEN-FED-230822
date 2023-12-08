import { gen12345 } from './yield-star';

for (let value of gen12345()) {
  console.log(value);
}
