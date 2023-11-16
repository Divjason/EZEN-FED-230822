anime({
  targets: '.box1',
  translateX: 250,
  easing: 'linear',
  background: '#000',
  loop: true,
  direction: 'alternate',
  borderRadius: '50%',
});
anime({
  targets: '.box2',
  translateX: 280,
  translateY: 300,
  duration: 1000,
  delay: 1000,
  easing: 'easeInQuart',
  loop: true,
  direction: 'alternate',
});
anime({
  targets: '.box3',
  translateX: {
    value: 400,
    duration: 1000,
    delay: 1000,
  },
  rotate: {
    value: 360,
    duration: 10000,
  },
});
