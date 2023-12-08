const Body = document.querySelector('body');
const Nav_btn = document.querySelector('#nav_icon');
const sec2_Title = document.querySelector('#sec2 h1.title');
const sec2_Slider = document.querySelector('#sec2 .slider_wrap');

Nav_btn.addEventListener('click', () => {
  Body.classList.toggle('nav_active');
});

const sec2 = () => {
  sec2_Title.style.cssText = `
  opacity: 1;
  transform: translateX(50px);
  `;
  sec2_Slider.style.cssText = `
  opacity: 1;
  transform: translateX(-50px);
  `;
};

const sec2_reset = () => {
  sec2_Title.style.cssText = `
  opacity: 0;
  transform: translateX(-50px);
  `;
  sec2_Slider.style.cssText = `
  opacity: 0;
  transform: translateX(50px);
  `;
};

new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ['Num0', 'Num1', 'Num2', 'Num3', 'Num4'],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 2) {
      sec2();
      console.log('section 2 Hello!');
    }
    if (old_elem.index === 2) {
      sec2_reset();
      console.log('section 2 good bye!');
    }
  },
});
