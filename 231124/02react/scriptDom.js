const button = document.querySelector('button');
const ul = document.querySelector('ul');

button.addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    const curElm = document.createElement('li');
    curElm.innerHTML = `hi ${i}`;
    ul.appendChild(curElm);
  }
});
