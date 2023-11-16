// 보통 영상을 편집.제작
// 타임라인 => 시간에 따라서 내가 보여주고 싶은 소스를 나타내주는 일종의 가로로 긴 시간표!!

const tl = anime.timeline({
  easing: 'linear',
  duration: 1000,
});

tl.add({
  targets: '.circle1',
  translateX: 500,
})
  .add({
    targets: '.circle1',
    translateY: 500,
  })
  .add({
    targets: '.circle1',
    translateX: 0,
  })
  .add({
    targets: '.circle1',
    translateY: 0,
  })
  .add({
    targets: '.circle2',
    scale: 1.5,
    rotate: 360,
    borderRadius: 0,
  });
