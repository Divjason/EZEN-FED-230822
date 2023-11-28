export const test1 = async () => {
  let value = await 1;
  console.log(value);
  value = await Promise.resolve(1);
  console.log(value);
};
