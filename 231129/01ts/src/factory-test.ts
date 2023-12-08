import { create } from './factory';

class Point {
  constructor(public x: number, public y: number) {}
}

[create(Date), create(Point, 0, 0)].forEach((s) => console.log(s));
