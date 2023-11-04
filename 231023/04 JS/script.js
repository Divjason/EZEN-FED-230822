const f = document.querySelector("#number1");
const s = document.querySelector("#number2");
const button = document.querySelector("button");
const result = document.querySelector("#result");

const getGCD = (f, s) => {
  let max = f > s ? f : s;
  let GCD = 0;
  for (let i = 0; i <= max; i++) {
    if (f % i === 0 && s % i === 0) {
      GCD = i;
    }
  }
  return GCD;
};

button.onclick = () => {
  result.innerText = getGCD(f.value, s.value);
};
