export async function test2() {
  let value = await 'Hello';
  console.log(value);
  value = await Promise.resolve('Hello');
  console.log(value);
}
