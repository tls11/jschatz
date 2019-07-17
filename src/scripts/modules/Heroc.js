class Hero {
  constructor() {
    this.frames = document.querySelectorAll('.frame');
    this.events();
  }

  events() {
    this.entranceAnimation();
    this.setupMedals();
  }

  entranceAnimation() {
    this.tlEntrance = new TimelineMax();
    this.tlEntrance
      .from('.hero__text', 1.2, { x: -1250 })
      .staggerFrom('.frame', 1, { opacity: 0, scale: 0, y: 150 }, 0.2);
  }

  setupMedals() {
    this.frames.forEach(frame => {
      this.logo = frame.querySelector('.logo-container');
      this.avatar = frame.querySelector('.avatar');

      TweenMax.set(frame, { perspective: 1000 });
      TweenMax.set(this.avatar, { rotationY: -180 });

      frame.animation = this.createTlFlip(this.logo, this.avatar);
      frame.addEventListener('mouseover', e => e.currentTarget.animation.play());
      frame.addEventListener('mouseout', e => e.currentTarget.animation.reverse());
    });
  }

  createTlFlip(logo, avatar) {
    this.tlFlip = new TimelineMax({ paused: true });
    this.tlFlip
      .to(logo, .75, { rotationY: 180 })
      .to(avatar, .75, { rotationY: 0 }, 0);
    return this.tlFlip;
  }
}

export default Hero;
