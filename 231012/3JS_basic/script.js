let now = new Date();
let firstDay = new Date(`2023-08-22`);
let toNow = now.getTime();
let toFirst = firstDay.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime / (24 * 60 * 60 * 1000));
document.querySelector(".accent").innerHTML = passedDay + "일째 되는날 😍";

function calcDate(days) {
  let future = toFirst + days * (24 * 60 * 60 * 1000);
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth() + 1;
  let date = someday.getDate();
  document.querySelector(
    "#date" + days
  ).innerHTML = `${year}년 ${month}월 ${date}일`;
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);
