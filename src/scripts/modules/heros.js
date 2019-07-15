const frames = document.querySelectorAll('.frame');

const createTlFlip = (logo, avatar) => {
  const tlFlip = new TimelineMax({ paused: true });
  tlFlip
    .to(logo, .75, { rotationY: 180 })
    .to(avatar, .75, { rotationY: 0 }, 0);
  return tlFlip;
}

frames.forEach(frame => {
  const logo = frame.querySelector('.logo-container');
  const avatar = frame.querySelector('.avatar');

  TweenMax.set(frame, { perspective: 1000 });
  TweenMax.set(avatar, { rotationY: -180 });

  frame.animation = createTlFlip(logo, avatar);
  frame.addEventListener('mouseover', e => e.currentTarget.animation.play());
  frame.addEventListener('mouseout', e => e.currentTarget.animation.reverse());
});

// entrance animation
const tlEntrance = new TimelineMax();
tlEntrance
  .from('.hero__text', 1.2, { x: -1250 })
  .staggerFrom('.frame', 1, { opacity: 0, scale: 0, y: 150 }, 0.2);
