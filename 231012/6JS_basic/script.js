const buttons = document.querySelectorAll("button");
console.log(buttons);

const computerChoice = document.querySelector(".computer-choice");
const userChoice = document.querySelector(".you-choice");
const winner = document.querySelector(".result");
const result = ["가위", "바위", "보"];

const show = function (user, computer, result) {
  userChoice.innerHTML = user;
  computerChoice.innerHTML = computer;
  winner.innerHTML = result;
};

const game = function (user, computer) {
  if (user === computer) {
    message = "무승부";
  } else {
    switch (user + computer) {
      case "가위보":
      case "바위가위":
      case "보바위":
        message = "사용자 승리!";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        message = "컴퓨터 승리!";
        break;
    }
  }
  show(user, computer, message);
};

const play = function (event) {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach(function (button) {
  button.addEventListener("click", play);
});
