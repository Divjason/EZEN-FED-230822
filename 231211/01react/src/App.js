import "./App.css";
import { useState } from "react";
import Box from "./Box";

// 나와 컴퓨터가 가위.바위.보 게임을 한다면 무엇이 필요할까?
// 1.나와 컴퓨터가 선택한 가위.바위.보를 화면에 출력!! (*완료)
// 2.내가 가위.바위.보 중 무엇을 선택할지에 대한 옵션선택지!! (*완료)
// 3.내가 가위.바위.보 중 무엇인가를 선택한다면, 해당 결과를 화면 출력!! (*완료)
// 4.하지만, 컴퓨터는 랜덤으로 값을 선택해야한다. 그리고 결과를 화면 출력!! (*완료)
// 5.3~4의 결과값에 따라 누가 이겼는지 승.패를 알아야함!!
// 6.승자와 패자의 화면결과를 살짝 다르게 스타일링 해주면 좋을듯!!

const choice = {
  scissors: {
    name: "scissors",
    img: "https://i.ebayimg.com/images/g/vWUAAOSwMsNgq35h/s-l1600.jpg",
  },
  rock: {
    name: "rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
  },
  paper: {
    name: "paper",
    img: "https://pothkade.lk/wp-content/uploads/2019/11/PAP0285.jpg",
  },
};

function App() {
  const [userSelect, setuserSelect] = useState({});
  const [computerSelect, setcomputerSelect] = useState({});
  const [result, setResult] = useState("");
  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log(itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log(randomItem);
    let final = itemArray[randomItem];
    console.log(final);
    return choice[final];
  };
  // user == computer tie

  // user == rock, computer == scissors user win
  // user == scissors, computer == papger user win
  // user == pager, compuer == rock user win

  // user == rock, computer == papaer user lose
  // user == scissors, computer == rock user lose
  // user == pager, compuer == scissors user lose

  const judgement = (user, computer) => {
    console.log(user, computer);
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "rock") {
      return computer.name === "scissors" ? "win" : "lose";
    } else if (user.name === "scissors") {
      return computer.name === "paper" ? "win" : "lose";
    } else if (user.name === "paper") {
      return computer.name === "rock" ? "win" : "lose";
    }
  };

  const play = (userChoice) => {
    setuserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setcomputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  return (
    <div className="App">
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
