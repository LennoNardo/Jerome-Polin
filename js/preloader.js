const tl = gsap.timeline();

tl.to("body", {
  overflow: "hidden"
})
  .to(".preloader .text-container", {
    duration: 0,
    opacity: 1,
    ease: "Power3.easeOut"
  })
  .from(".preloader .text-container h1", {
    duration: 1,
    delay: 0,
    y: 70,
    // skewY: -10,
    stagger: 0.4,
    ease: "Power3.easeOut"
  })
  .to(".preloader .text-container h1", {
    duration: 0.3,
    y: -70,
    // skewY: -10,
    stagger: 0.2,
    ease: "Power3.easeOut"
  })
  .to(".preloader", {
    duration: 0.5,
    height: "0vh",
    ease: "Power3.easeOut"
  })
  .to(
    "body",
    {
      overflow: "auto"
    },
    "-=2"
  )
  .to(".preloader", {
    display: "none"
  });

  gsap.from('.fade-up-gsap', {duration: 1.5, y:100, opacity:0, delay:3.5});
  gsap.from('.wrap-about', {duration: 1.5, y:100, opacity:0, delay:2.5});
  gsap.from('.wrap-img-about', {duration: 1.5, y:100, opacity:0, delay:2.8});
  gsap.from('.heading-text', {duration: 1.5, y:100, opacity:0, delay:2.5});
  gsap.from('.card-heading-child1', {duration: 1.5, y:100, opacity:0, delay:2.5});
  gsap.from('.card-heading-child2', {duration: 1.5, y:100, opacity:0, delay:2.7});
  gsap.from('.card-heading-child3', {duration: 1.5, y:100, opacity:0, delay:2.9});
  gsap.from('.card-heading-child4', {duration: 1.5, y:100, opacity:0, delay:3.1});


  // GSAP hover animation
const cardHeadings = document.querySelectorAll('.card-heading-child');

cardHeadings.forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, { duration: 0.3, y: -10, boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, { duration: 0.3, y: 0, boxShadow: "none" });
  });
});