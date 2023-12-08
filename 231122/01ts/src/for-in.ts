// for in VS for of 문의 차이점?
// for in : 이터러블 객체의 인덱스값을 찾아올 때
// for of : 이터러블 객체안에 담긴 값을 찾아올 때

const names = ['Jack', 'Jane', 'Steve'];
for (let i in names) {
  const name = names[i];
  console.log(`[${i}]: ${name}`);
}

let jack = {
  name: 'Jack',
  age: 32,
};
for (let i in jack) {
  console.log(`${i} : jack[${i}]`);
}
