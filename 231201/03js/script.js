const oldTime = Date.now();
const totalTime = 60000;

const timerId = setInterval(() => {
  const currentTime = Date.now();
  const diff = currentTime - oldTime;

  const remainMsec = totalTime - diff;
  const remainSec = Math.ceil(remainMsec / 1000);

  let label = `남은시간 ${remainSec}초`;

  if (remainMsec <= 0) {
    clearInterval(timerId);
    label = '종료';
  }
  document.querySelector('#log').innerText = label;
}, 1000);
