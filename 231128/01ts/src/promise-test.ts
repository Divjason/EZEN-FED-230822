Promise.reject(new Error('에러발생사유')).catch((err: Error) =>
  console.log('err: ', err.message)
);

Promise.resolve(1)
  .then((value: number) => {
    console.log(value);
    return Promise.resolve(true);
  })
  .then((value: boolean) => {
    console.log(value);
    return [1, 2, 3];
  })
  .then((value: number[]) => {
    console.log(value);
    return { name: 'jack', age: 32 };
  })
  .then((value: { name: string; age: number }) => {
    console.log(value);
  });
