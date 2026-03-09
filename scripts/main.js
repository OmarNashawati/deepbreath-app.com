gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", (event) => {
  // Hero
  gsap.to("#hero_text_img", {
    opacity: 1,
    scale: 1.1,
    duration: 2,
  });

  gsap.from(".hero_link", {
    xPercent: -100,
    autoAlpha: 0,
    duration: 1,
    stagger: -0.2,
  });

  //Qoutes

  let splitQoute = SplitText.create(".js-quote", { type: "words" });

  gsap.from(splitQoute.words, {
    xPercent: -100,
    duration: 1,
    autoAlpha: 0,
    stregger: 0.01,
    scrollTrigger: ".js-quote",
  });

  gsap.from(".js-quote_writer", {
    autoAlpha: 0,
    delay: 1,
    duration: 1,
    scrollTrigger: ".js-quote_writer",
  });

  //download
  gsap.from(".app_descreption", {
    xPercent: -100,
    duration: 1,
    stagger: 0.2,
    delay: 0.3,
    autoAlpha: 0,
    scrollTrigger: ".app_descreption",
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
    delay: 0.5,
    autoAlpha: 0,
    ease: "power2.out",
    scrollTrigger: ".features_item",
  });
});
