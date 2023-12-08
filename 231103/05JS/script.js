let pizza = true;

const order = new Promise((resolve, reject) => {
  if (pizza) {
    console.log(`피자 도우 완료`);
    resolve(
      setTimeout(() => {
        console.log(`피자 토핑 완료`);
        setTimeout(() => {
          console.log(`피자 굽기 완료`);
        }, 1000);
      }, 1000)
    );
  } else {
    reject(`피자가 준비되지않습니다.`);
  }
});

order
  .then()
  .catch()
  .finally(
    setTimeout(() => {
      () => console.log(`피자가 완료되었습니다.`);
    }, 1000)
  );
