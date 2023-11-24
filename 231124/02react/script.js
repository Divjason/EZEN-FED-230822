// 지금부터 작성하는 코드가 바로 명령형 프로그래밍 코드!!
// 명령형 프로그래밍 코드 = 로우레벨

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const result = document.querySelector('#result');

minus.addEventListener('click', () => {
  // current공간에 10진수 기준, 숫자형의 값을 가져와서 저장!!
  const current = parseInt(result.innerText, 10);
  result.innerHTML = current - 1;
});

plus.addEventListener('click', () => {
  // current공간에 10진수 기준, 숫자형의 값을 가져와서 저장!!
  const current = parseInt(result.innerText, 10);
  result.innerHTML = current + 1;
});
