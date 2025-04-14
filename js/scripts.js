const { innerHeight } = window;

gsap.to("#about_main", {
  scale: 4,
  y: "90%",
  transform: "translate(-60%, -110%)",
  y: "100vh",
  scrollTrigger: {
    trigger: "#hero",
    start: "top top", // When the top of #hero hits top of viewport
    end: "bottom top", // Until the bottom of #hero hits top of viewport
    scrub: true, // Sync with scroll
    // pin: false (default)
    markers: false, // Optional: for debugging
  },
});
