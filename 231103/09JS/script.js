/*
let displayHello = () => {
  console.log("Hello");
};


displayHello();
*/

// JS에서 비동기처리방식 마지막 3번째 방법 : async 함수!!!

/*
async function displayHello01() {
  console.log("Hello");
}

displayHello01();
*/

/*
function whatsYourFavorite() {
  let fav = "Javascript";
  return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
  return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatsYourFavorite().then(displaySubject).then(console.log);
*/

async function whatsYourFavorite() {
  let fav = "Javascript";
  return fav;
}

async function displaySubject(subject) {
  return `Hello, ${subject}`;
}

async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject(response);
  console.log(result);
}

init();

/*
whatsYourFavorite().then(displaySubject).then(console.log);
*/
