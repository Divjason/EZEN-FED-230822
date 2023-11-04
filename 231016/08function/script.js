let arrSubject = ["국어", "수학"];
let result = testAvg(arrSubject);

function testAvg(arrData) {
  let sum = 0;
  for (let i = 0; i < arrData.length; i++) {
    sum += parseInt(prompt(arrData[i] + `점수는?`));
  }
  let avg = sum / arrData.length;
  return avg;
}

document.write(`두 과목의 평균점수는 ${result}점 입니다.`);
