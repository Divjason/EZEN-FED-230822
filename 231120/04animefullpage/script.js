const Body = document.querySelector('body');
const Nav_btn = document.querySelector('#nav_icon');

// section2 slider
const s_Icons = document.querySelectorAll('.slide_icons li');
const s_Left = document.querySelector('.slide_btn.left');
const s_Right = document.querySelector('.slide_btn.right');
const Bg = document.querySelector('#sec2');
const s_Slider = document.querySelectorAll('.sec2_slider li');

const s_reset = () => {
  s_Slider.forEach((elem, idx) => {
    s_Slider[idx].classList.remove('on');
    s_Icons[idx].classList.remove('active');
  });
};

s_Icons.forEach((li) => {
  li.addEventListener('click', (e) => {
    let target = e.target.dataset.index;
    console.log(target);
    s_reset();
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

const next = (e) => {
  e.preventDefault();
  let crtSlide = document.querySelector('.sec2_slider li.on');
  let i = crtSlide.dataset.index;
  s_reset();
  i++;
  if (i >= s_Slider.length) {
    i = 0;
  }
  s_Slider[i].classList.add('on');
  s_Icons[i].classList.add('active');
  Bg.style.backgroundImage = `url(./img/sec2_bg_${[i]}.png)`;
};

s_Right.addEventListener('click', next);

const prev = (e) => {
  e.preventDefault();
  let crtSlide = document.querySelector('.sec2_slider li.on');
  let i = crtSlide.dataset.index;
  s_reset();
  i--;
  if (i < 0) {
    i = s_Slider.length - 1;
  }
  s_Slider[i].classList.add('on');
  s_Icons[i].classList.add('active');
  Bg.style.backgroundImage = `url(./img/sec2_bg_${[i]}.png)`;
};

s_Left.addEventListener('click', prev);

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
  let tl = anime.timeline({
    duration: 500,
    easing: 'linear',
  });
  tl.add({
    targets: '#sec2 h1',
    opacity: 1,
    translateY: 50,
  }).add({
    targets: '.slider_wrap',
    opacity: 1,
    translateY: 50,
  });
};
const sec3 = () => {
  const d0 =
    'M453 100C283.5 11.5 184 0.499989 0.5 0.5V772H1921V63C1753.5 144 1381.5 288 1146 288C825 288 726.67 242.89 453 100Z';
  const d1 =
    'M570 10C308.5 -26.5 135 62 0.5 95V730H1921V95C1753.5 176 1579.5 209 1344 209C1028.11 209 875.763 52.6782 570 10Z';
  const d2 =
    'M585.5 276C367.959 243.273 245 160.5 0.5 20V729H1921V20C1693 -24 1501 6.78688 1312 147.287C1070.85 326.558 758.5 302.027 585.5 276Z';

  anime({
    targets: '.sec3_svg path',
    d: [{ value: d0 }, { value: d1 }, { value: d2 }],
    fill: [{ value: '#667eea' }, { value: '#764ba2' }, { value: '#66a6ff' }],
    duration: 3000,
    easing: 'easeInOutQuart',
    loop: true,
    direction: 'alternate',
  });

  anime({
    targets: '#sec3 h1 span',
    delay: anime.stagger(100),
    opacity: 1,
    translateX: 100,
    easing: 'easeOutSine',
  });
};
const staggerWrap = document.querySelector('#sec4 .img_wrap');
const fragment = document.createDocumentFragment();
const grid = [20, 20];
const col = grid[0];
const row = grid[1];

const allElem = col * row;
for (let i = 0; i < allElem; i++) {
  const div = document.createElement('div');
  fragment.appendChild(div);
  div.className = 'tail';
}

staggerWrap.appendChild(fragment);

const sec4 = () => {
  const stageAni = anime.timeline({
    targets: '.tail',
    easing: 'easeInBack',
    delay: anime.stagger(10, { from: 'last' }),
    duration: 2000,
    endDelay: 1000,
    loop: false,
    autoplay: false,
  });
  stageAni
    .add({
      targets: '#sec4 h1 img',
      opacity: 0,
      duration: 500,
    })
    .add({
      translateX: function () {
        return anime.random(-500, 500);
      },
      translateY: function () {
        return anime.random(-500, 500);
      },
      delay: anime.stagger(200, { grid: grid, from: 'last' }),
      scale: 0.2,
      background: '#fff',
      borderRadius: '50%',
    })
    .add({
      targets: staggerWrap,
      rotate: 360,
      easing: 'linear',
      duration: 4000,
      scale: 0.5,
    })
    .add({
      targets: staggerWrap,
      duration: 1000,
      scale: 1,
    })
    .add({
      translateX: 0,
      translateY: 0,
      delay: anime.stagger(100, { grid: grid, from: 'center' }),
      duration: 3000,
      scale: 0.8,
      background: '#2af598',
    })
    .add({
      scale: 0.5,
      duration: 500,
      rotate: 60,
      borderRadius: '0%',
      delay: anime.stagger(100, { grid: grid, from: 'center' }),
    })
    .add({
      scale: 0.8,
      duration: 500,
      rotate: -60,
      borderRadius: '50%',
      background: '#fff',
      delay: anime.stagger(100, { grid: grid, from: 'center' }),
    })
    .add({
      scaleX: 0.1,
      scaleY: 1,
      duration: 500,
      rotate: 120,
      borderRadius: '0%',
      background: '#2af598',
      delay: anime.stagger(100, { grid: grid, from: 'center' }),
    })
    .add({
      duration: 500,
      rotate: 0,
      delay: anime.stagger(100, { grid: grid, from: 'center' }),
    })
    .add({
      scaleX: 1,
      duration: 500,
      delay: anime.stagger(100, { grid: grid, from: 'center' }),
    })
    .add({
      scale: 1,
      duration: 800,
      background: '#009efd',
      delay: anime.stagger(100, { grid: grid, from: 'center' }),
    })
    .add({
      targets: '#sec4 h1 img',
      opacity: 1,
      duration: 500,
    });

  // stageAni.play();

  staggerWrap.addEventListener('click', () => {
    stageAni.play();
  });
};

sec4();

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
      // 함수가 다 실행되지 않은 상태에서 움직였을 때 문제 발생!!
      // sec4();
    }
  },
});
