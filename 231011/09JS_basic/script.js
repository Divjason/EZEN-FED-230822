let n = parseInt(prompt("1보다 큰 숫자를 입력하세요!"));
let sum = 0;

if (n !== null && n > 1) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      continue;
    }
    sum += i;
    document.write(`${i} ---- ${sum} <br/>`);
  }
}
