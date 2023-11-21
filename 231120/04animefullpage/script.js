const Body = document.querySelector('body');
const Nav_btn = document.querySelector('#nav_icon');

// section2 slider
const s_Icons = document.querySelectorAll('.slide_icons');
const s_Left = document.querySelector('.slide_btn.left');
const s_Right = document.querySelector('.slide_btn.right');
const Bg = document.querySelector('#sec2');
const s_Slider = document.querySelectorAll('.sec2_slider li');

s_Icons.forEach((li) => {
  li.addEventListener('click', (e) => {
    let target = e.target.dataset.index;
    console.log(target);
    if (li.tagName === 'LI') {
      for (let i = 0; i < s_Icons.length; i++) {
        if (target == i) {
          s_Slider[i].classList.add('on');
          s_Icons[i].classList.add('active');
          Bg.style.backgroundImage = `url(./img/sec2_bg_${[i]}.png)`;
        }
      }
    }
  });
});

Nav_btn.addEventListener('click', () => {
  Body.classList.toggle('nav_active');
});

const sec0 = () => {
  anime({
    targets: '.svg1 path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 4000,
    delay: function (el, i) {
      return i * 400;
    },
    direction: 'alternate',
    loop: true,
  });
};
const sec1 = () => {
  let tl = anime.timeline({
    easing: 'linear',
    duration: 500,
  });
  tl.add({
    targets: '.g01',
    height: '80%',
  })
    .add({
      targets: '.g02',
      height: '70%',
    })
    .add({
      targets: '.g03',
      height: '80%',
    })
    .add({
      targets: '.g04',
      height: '85%',
    });
};
const sec1_reset = () => {
  anime({
    targets: '.gage_in',
    height: '0%',
  });
};
const sec2 = () => {
  console.log('sec2');
};
const sec3 = () => {
  console.log('sec3');
};
const sec4 = () => {
  console.log('sec4');
};

new fullpage('#fullpage', {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  anchors: ['Num0', 'Num1', 'Num2', 'Num3', 'Num4'],
  afterLoad: (old_elem, new_elem, direction) => {
    if (new_elem.index === 0) {
      sec0();
    }
    if (new_elem.index === 1) {
      sec1();
    }
    if (old_elem.index === 1) {
      sec1_reset();
    }
    if (new_elem.index === 2) {
      sec2();
    }
    if (new_elem.index === 3) {
      sec3();
    }
    if (new_elem.index === 4) {
      sec4();
    }
  },
});
