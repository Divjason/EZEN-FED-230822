let name = prompt("😁 이름을 말씀해주세요!", "ex. 홍길동");
let height = parseInt(prompt("😘 키가 어떻게 되시죠?", "ex. 180"));
let weight = parseInt(
  prompt("😋 현재 몸무게를 솔직하게 말씀해주세요!", "ex. 70")
);

let normal_w = (height - 100) * 0.9;
let result = weight >= normal_w - 5 && weight <= normal_w + 5;
result = result
  ? "적정체중이시네요! 😍 축하해요~"
  : "적정체중이 아닙니다. 🤣 조금만 더 노력해주세요!";
document.write(`${name}님은 ${result}`);
