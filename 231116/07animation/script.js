const staggerWrap = document.querySelector('ul');
const fragment = document.createDocumentFragment();
const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allElem = row * col;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement('li');
  fragment.appendChild(li);
}
staggerWrap.appendChild(fragment);

anime({
  targets: 'ul li',
  easing: 'linear',
  duration: 1000,
  scale: anime.stagger([0.5, 1], { grid: [9, 5], from: 'center', axis: 'z' }),
});
