gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
  // Hero
  gsap.to("#hero_text_img", {
    opacity: 1,
    scale: 1.1,
    duration: 2,
  });

  gsap.from(".hero_link", {
    x: -200,
    duration: 1,
    stagger: -0.2,
  });

  //Qoutes

  gsap.from(".js-quote", {
    xPercent: -100,
    duration: 1,
    scrollTrigger: {
      trigger: ".js-quote",
      start: "top bottom",
      once: true,
    },
  });

  // gsap.from(".js-quote_writer", {
  //   xPercent: 100,
  //   duration: 2,
  //   delay: 1,
  //   scrollTrigger: {
  //     trigger: ".js-quote_writer",
  //     start: "top bottom",
  //     once: true,
  //   },
  // });

  //download
  gsap.from(".app_descreption", {
    xPercent: -100,
    duration: 1,
    stagger: 0.2,
    delay: 0.3,
    scrollTrigger: {
      trigger: ".app_descreption",
      start: "top bottom",
      once: true,
    },
  });

  gsap.from(".googleplay_button", {
    scale: 1.5,
    duration: 1,
  });

  //Feature
  gsap.from(".features_item", {
    xPercent: -100,
    y: -100,
    duration: 1,
    stagger: 0.2,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".features_item",
      start: "top bottom",
      once: true,
    },
  });
});
