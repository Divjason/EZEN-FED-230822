import test from 'node:test';
import { test1 } from './test01';
import { test2 } from './test02';

// test1();
// test2();

test1().then(() => test2());
