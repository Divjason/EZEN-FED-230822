// 콜백함수를 사용해서 비동기처리 프로그래밍 완성!!!
// JS를 좀 한다는 사람치고, 잘하는 사람 못봤다!!!

// function order(coffee, callback) {
//   console.log(`${coffee} 주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// }

// function display(result) {
//   console.log(`${result} 준비 완료`);
// }

// order('아메리카노', display);

// 실무에서 자주만나는 콜백지옥
function displayLetter() {
  console.log('A');
  setTimeout(() => {
    console.log('B');
    setTimeout(() => {
      console.log('C');
      setTimeout(() => {
        console.log('D');
        setTimeout(() => {
          console.log('stop!');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

displayLetter();
