const test = async () => {
  const value = await Promise.resolve(1);
  console.log(value);
};

test();

// async function test() {

// }
