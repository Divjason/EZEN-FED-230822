// 문자열 & 배열
// => 메서드!!!!

const string = prompt("문자열을 입력하세요!");
const letter = prompt("어떤 문자를 체크하시겠습니까?");

let counting = (str, ch) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count += 1;
    }
  }

  return count;
};

const result = counting(string, letter);
alert(`${string}에는 "${letter}"가 ${result}개 있습니다.`);
