const tl = new gsap.timeline();

tl.from(".page__not__found span, .logo", {
  duration: 0.8,
  stagger: {
    amount: 0.7,
  },
  y: 200,
  skewY: 10,
  opacity: 0,
});
tl.from(
  ".home__btn",
  {
    scale: 0,
    duration: 0.5,
    stagger: {
      amount: 0.6,
    },
  },
  "-=.2"
);
