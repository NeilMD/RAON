// gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const heroImg = document.getElementById("about_main");
  const imgCon = document.getElementById("img-con");
  const contactSection = document.getElementById("growth-sec");

  // Get position of img-con relative to viewport
  const bounds = imgCon.getBoundingClientRect();

  // Convert to position relative to #contact section
  const contactBounds = contactSection.getBoundingClientRect();

  const fromX = bounds.left - contactBounds.left;
  const fromY = bounds.top - contactBounds.top;

  const fromWidth = bounds.width;
  const fromHeight = bounds.height;

  //   // Set transform origin to top left
  //   gsap.set(heroImg, {
  //     transformOrigin: "top left",
  //   });

  // Animate from position of #img-con to full section
  gsap.from(heroImg, {
    scrollTrigger: {
      trigger: "#growth-sec",
      start: "top bottom",
      end: "top top",
      scrub: true,
    },
    x: fromX,
    y: fromY,
    width: fromWidth,
    height: fromHeight,
    ease: "none",
  });
});
