import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// For lenis
const lenis = new Lenis({
  duration: 1.25,
  smoothWheel: true,
});

const raf = (time: number) => {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

// Hero Section

gsap.from(".name", {
  yPercent: 130,
  duration: 1,
  stagger: 0.25,
  ease: "back.inOut",
});
gsap.from(".contact", {
  yPercent: 130,
  duration: 1,
  stagger: 0.25,
  ease: "back.inOut",
});

// About section

gsap.fromTo(
  ".about-img",
  { y: 150 },
  {
    y: 0,
    duration: 2,
    ease: "power1.in",
    scrollTrigger: {
      trigger: ".slider-text",
      scrub: 0,
      start: "top center",
      end: "bottom center",
    },
  }
);

const tlAbout = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-about",
    scrub: true,
    start: "top center", // Change start position to trigger animation when element reaches the center of the viewport
    end: "bottom center",
  },
});

tlAbout
  .from(".text-about", {
    opacity: 0,
    yPercent: 136,
    stagger: 0.05,
    ease: "power3.Out",
  })
  .from(".github-stats", {
    opacity: 0,
    yPercent: 136,
    duration: 3.5,
    ease: "power3.Out",
  });

gsap.from(".title-about", {
  yPercent: 136,
  duration: 1,
  stagger: 0.25,
  ease: "back.inOut",
  scrollTrigger: {
    trigger: ".section-about",
    start: "top bottom", // Change start position to trigger animation when element reaches the center of the viewport
    end: "bottom center",
    scrub: 1,
  },
});

// Infinite slider text

let xPercent = 0;
let direction = -1;

function animate() {
  if (xPercent < -100) {
    xPercent = 0;
  } else if (xPercent > 0) {
    xPercent = -100;
  }
  gsap.set(".text-1", { xPercent: xPercent });
  gsap.set(".text-2", { xPercent: xPercent });
  requestAnimationFrame(animate);
  xPercent += 0.05 * direction;
}

gsap.to(".slider-text", {
  scrollTrigger: {
    trigger: document.documentElement,
    scrub: 0.25,
    start: 0,
    end: window.innerHeight,
    onUpdate: (e) => (direction = e.direction * -1),
  },
  x: "-500px",
});

requestAnimationFrame(animate);

// Skills section

const tlSkill = gsap.timeline({
  scrollTrigger: {
    trigger: ".title-skills",
    scrub: 1,
    start: "top center", // Change start position to trigger animation when element reaches the center of the viewport
    end: "bottom 25%",
  },
});

tlSkill.from(".title-skills", {
  xPercent: -136,
  duration: 1,
  opacity: 0,
  ease: "back.inOut",
});

gsap.from(".about-img", {
  opacity: 0,
  yPercent: 100,
  duration: 1,
  ease: "circ.inOut",
  scrollTrigger: {
    trigger: ".section-skills",
    start: "top bottom",
    end: "bottom 95%",
    scrub: 1,
  },
});

gsap.from(".skill", {
  yPercent: 150,
  duration: 1,
  ease: "back.inOut",
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".section-skills",
    start: "top 95%", // Change start position to trigger animation when element reaches the center of the viewport
    end: "bottom center",
    scrub: 1,
  },
});