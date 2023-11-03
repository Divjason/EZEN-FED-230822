// JS 프로미스 객체 (*내장객체)
// Date, Array, Object 등등

let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve(`피자를 주문합니다!`);
  } else {
    reject(`피자를 주문하지 않습니다!`);
  }
});

pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("완료!");
  });
