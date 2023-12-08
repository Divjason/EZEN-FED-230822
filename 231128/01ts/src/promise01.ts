Promise.resolve(1).then((value) => console.log(value));

Promise.resolve('hello').then((value) => console.log(value));

const array = [1, 2, 3];
Promise.resolve(array).then((value) => console.log(value));

const obj = {
  name: 'Park',
  age: 20,
};
Promise.resolve(obj).then((value) => console.log(value));
