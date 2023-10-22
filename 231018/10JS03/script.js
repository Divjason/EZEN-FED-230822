const f = parseInt(prompt("첫번째 숫자"));
const s = parseInt(prompt("두번째 숫자"));

// 최대공약수 구하는 "기능" 구현!!!

function getGCD(n, m) {
  let max = n > m ? n : m;
  let GCD = 0;
  for (let i = 1; i <= max; i++) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
    }
  }
  return GCD;
}

console.log(`${f}와 ${s}의 최대공약수는 ${getGCD(f, s)}`);
