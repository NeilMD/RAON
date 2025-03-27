const { innerHeight } = window;

gsap.to("#about_main", {
  scale: 3,
  stagger: 0.25,
  left: 0,
  duration: 3,
  scrollTrigger: {
    trigger: "#hero", // Start the animation when #hero enters the viewport
    pin: true, // Pin the #hero section during the animation
    end: `+=${innerHeight}`, // End the animation when the user has scrolled the height of the viewport
    scrub: 3, // Sync animation with scroll position
  },
});
