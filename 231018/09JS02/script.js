const number = parseInt(prompt("숫자를 입력하세요!"));

const isPositive = (n) => {
  if (n > 0) {
    alert(`${n}는 양수입니다!`);
  } else if (n < 0) {
    alert(`${n}는 음수입니다!`);
  } else {
    alert(`${n}는 0입니다!`);
  }
};

if (!isNaN(number)) {
  isPositive(number);
}
