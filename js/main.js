let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part-infinite", {xPercent: -100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

gsap.set(".marquee__inner-infinite", {xPercent: -50});

window.addEventListener("scroll", function(){
  
  if ( window.pageYOffset > currentScroll ) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }

  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });
  
  currentScroll = window.pageYOffset
});


