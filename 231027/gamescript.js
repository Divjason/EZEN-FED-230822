const startWord = () => {
  let myword = document.querySelector("#myword").value;
  let word = document.querySelector("#word").innerText;

  let lastword = word[word.length - 1];
  let firstword = myword[0];

  if(lastword === firstword) {
    document.querySelector("#result").innerText ="정답입니다!"
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText ="틀렸습니다!"
    document.querySelector("#myword").value = "";
  }
}

const result = document.querySelector(".game_lotto_number");
const button = document.querySelector(".wrapper_lotto_btn");

const luckyNumber = {
  digitCount: 6,
  maxNumber: 45
};

// console.log(luckyNumber);
// console.log(luckyNumber["digitCount"]);

button.addEventListener("click", () => {
  let { digitCount, maxNumber } = luckyNumber;
  let myNumber = new Set();
  for(let i = 0; i < digitCount; i++) {
    myNumber.add(Math.floor(Math.random() * maxNumber) + 1);
  }
  result.innerText = `${[...myNumber]}`
})