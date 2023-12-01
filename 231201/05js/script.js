const cbA = document.querySelector('#cbA');
const log = document.querySelector('.log');

cbA.addEventListener('change', (e) => {
  const value = e.target.checked;
  // const log = `체크박스 A는 ${value}로 변경되었습니다.`;
  // document.querySelector('.log').innerText = log;
  if (value) {
    log.innerText = `체크가 되었습니다.`;
  } else {
    log.innerText = `체크가 해제되었습니다.`;
  }
});
