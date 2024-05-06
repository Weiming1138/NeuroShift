//smoothscrolling
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0);
//gsap animations
let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#quote-text',
    start: "bottom 62%",
    end: "bottom 0%",
    scrub: true,
    markers: false
  }
});
t1.to('#quote-text', {
  y: -500, // Move upwards by 500 pixels
  duration: 2, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#keep-scrolling-container',
    start: "bottom 60%",
    end: "bottom -2%",
    scrub: true,
    markers: false
  }
});
t2.to('#keep-scrolling-container', {
  y: -500, // Move upwards by 500 pixels
  duration: 2, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro-scroll-icon',
    start: "bottom 58%",
    end: "bottom -4%",
    scrub: true,
    markers: false
  }
});
t3.to('#intro-scroll-icon', {
  y: -500, // Move upwards by 500 pixels
  duration: 2, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: '#habits-video',
    start: "bottom 90%",
    end: "bottom 0%",
    scrub: true,
    markers: false
  }
});
t4.to('#habits-video', {
  duration: 2, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t5 = gsap.timeline({
  scrollTrigger: {
    trigger: '#recognizing-habit-title',
    start: "center 50%",
    end: "+=100%",
    pin: true,
    scrub: true,
    markers: false
  }
});
t5.from('#recognizing-habit-title', {
  x: -window.innerHeight,
  duration: 1, // Duration of the animation
  opacity: 0,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t6 = gsap.timeline({
  scrollTrigger: {
    trigger: '#bar1',
    start: "center 100%",
    end: "center 60%",
    scrub: true,
    markers: false
  }
});
t6.from('#bar1', {
  width: window.innerWidth/100 + "px",
  duration: 1, // Duration of the animation
  ease: "power2.inOut" // Easing function for smoother movement
});

let t7 = gsap.timeline({
  scrollTrigger: {
    trigger: '#bar2',
    start: "center 100%",
    end: "center 70%",
    scrub: true,
    markers: false
  }
});
t7.from('#bar2', {
  width: window.innerWidth/100 + "px",
  duration: 1, // Duration of the animation
  ease: "power2.inOut" // Easing function for smoother movement
});

let t8 = gsap.timeline({
  scrollTrigger: {
    trigger: '#bar3',
    start: "center 100%",
    end: "center 80%",
    scrub: true,
    markers: false
  }
});
t8.from('#bar3', {
  width: window.innerWidth/100 + "px",
  duration: 1, // Duration of the animation
  ease: "power2.inOut" // Easing function for smoother movement
});

let t9 = gsap.timeline({
  scrollTrigger: {
    trigger: '#track-screen-time',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t9.from('#track-screen-time', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t10 = gsap.timeline({
  scrollTrigger: {
    trigger: '#track-screen-time-text',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t10.from('#track-screen-time-text', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t11 = gsap.timeline({
  scrollTrigger: {
    trigger: '#track-screen-time-visual',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t11.from('#track-screen-time-visual', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t12 = gsap.timeline({
  scrollTrigger: {
    trigger: '#find-the-cause-title',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t12.from('#find-the-cause-title', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t13 = gsap.timeline({
  scrollTrigger: {
    trigger: '#find-the-cause-text',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t13.from('#find-the-cause-text', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t14 = gsap.timeline({
  scrollTrigger: {
    trigger: '#find-the-cause-visual',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t14.from('#find-the-cause-visual', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

/*let t16 = gsap.timeline({
  scrollTrigger: {
    trigger: '#do-more-title',
    start: "top 100%",
    end: "top 0%",
    scrub: true,
    markers: true,
  }
});*/

let t16 = gsap.timeline({
  scrollTrigger: {
    trigger: '#do-more-title',
    start: "center 50%",
    end: "+=100%",
    pin: true,
    scrub: true,
    markers: false
  }
});
t16.from('#do-more-title', {
  x: window.innerHeight,
  duration: 1, // Duration of the animation
  opacity: 0,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t17 = gsap.timeline({
  scrollTrigger: {
    trigger: '#do-more-title',
    start: "center 50%",
    end: "+=100%",
    scrub: true,
    markers: false
  }
});

t17.to('#recognizing-habit-section', {
  duration: 1, // Duration of the animation
  opacity: 0,
  ease: "power2.in" // Easing function for smoother movement
});

let t18 = gsap.timeline({
  scrollTrigger: {
    trigger: '#do-more-title',
    start: "center 100%",
    end: "+=100%",
    scrub: true,
    markers: false
  }
});

t18.to('body', {
  backgroundColor: "#fffdf4",
  duration: 1, // Duration of the animation
  ease: "power2.in" // Easing function for smoother movement
});

let r19 = gsap.timeline({
  scrollTrigger: {
    trigger: '#do-more-title',
    start: "center 100%",
    end: "+=100%",
    scrub: true,
    markers: false
  }
});

r19.to('#menu-button .menu-button-span', {
  background: "#000000",
  duration: 1, // Duration of the animation
  ease: "power2.in" // Easing function for smoother movement
});

let t19 = gsap.timeline({
  scrollTrigger: {
    trigger: '#phone-less-appealing-title',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t19.from('#phone-less-appealing-title', {
  y: window.innerWidth/20,
  opacity: 0,
});

let t20 = gsap.timeline({
  scrollTrigger: {
    trigger: '#phone-less-appealing-text',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t20.from('#phone-less-appealing-text', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t21 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-text-1',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t21.from('#icon-text-1', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t22 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-text-2',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t22.from('#icon-text-2', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t23 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-text-3',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
t23.from('#icon-text-3', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t24 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-1',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
t24.from('#icon-1', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t25 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-2',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
t25.from('#icon-2', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t26 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-3',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
t26.from('#icon-3', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t27 = gsap.timeline({
  scrollTrigger: {
    trigger: '#replace-scrolling-title',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
t27.from('#replace-scrolling-title', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let t28 = gsap.timeline({
  scrollTrigger: {
    trigger: '#replace-scrolling-text',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
t28.from('#replace-scrolling-text', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r29 = gsap.timeline({
  scrollTrigger: {
    trigger: '#regain-your-focus-title',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
r29.from('#regain-your-focus-title', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r30 = gsap.timeline({
  scrollTrigger: {
    trigger: '#regain-your-focus-text',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
r30.from('#regain-your-focus-text', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r31 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-4',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
r31.from('#icon-4', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r32 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-5',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
r32.from('#icon-5', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r33 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-6',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
r33.from('#icon-6', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r34 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-text-4',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
r34.from('#icon-text-4', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r35 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-text-5',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
r35.from('#icon-text-5', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r36 = gsap.timeline({
  scrollTrigger: {
    trigger: '#icon-text-6',
    start: "top 90%",
    end: "top 60%",
    scrub: true,
    markers: false
  }
});
r36.from('#icon-text-6', {
  x: -window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r37 = gsap.timeline({
  scrollTrigger: {
    trigger: '#stay-consistent-title',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
r37.from('#stay-consistent-title', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});

let r38 = gsap.timeline({
  scrollTrigger: {
    trigger: '#stay-consistent-text',
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: false
  }
});
r38.from('#stay-consistent-text', {
  y: window.innerWidth/20,
  opacity: 0,
  duration: 1, // Duration of the animation
});


let t29 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-title',
    start: "center 50%",
    end: "+=100%",
    scrub: true,
    markers: false
  }
});
t29.from('#awareness-vid', {
  duration: 2, // Duration of the animation
  opacity: 0,
  ease: "power1.inOut" // Easing function for smoother movement
});

let e29 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-title',
    start: "center 50%",
    end: "+=100%",
    scrub: true,
    markers: false
  }
});
e29.to('#menu-button .menu-button-span', {
  background: "#FFFFFF",
  ease: "power1.inOut" // Easing function for smoother movement
});

let t30 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-title',
    start: "center 50%",
    end: "+=100%",
    scrub: true,
    markers: false
  }
});

t30.to('body', {
  backgroundColor: "black",
  ease: "power1.inOut" // Easing function for smoother movement
});

let t31 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-title',
    start: "center 50%",
    end: "+=100%",
    pin: true,
    scrub: true,
    markers: false
  }
});

t31.from('#spread-awareness-title', {
  y: window.innerHeight/5,
  duration: 1, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t32 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-title',
    start: "center 49.5%",
    end: "+=75%",
    pin: true,
    scrub: true,
    markers: false
  }
});

t32.to('#spread-awareness-title', {
  y: -window.innerHeight/20,
  duration: 1, // Duration of the animation
  opacity: -3,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t33 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-text',
    start: "center 50%",
    end: "+=100%",
    pin: true,
    scrub: true,
    markers: false
  }
});

t33.from('#spread-awareness-text', {
  y: window.innerHeight/5,
  duration: 1, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t34 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-text',
    start: "center 49.5%",
    end: "+=75%",
    pin: true,
    scrub: true,
    markers: false
  }
});

t34.to('#spread-awareness-text', {
  y: -window.innerHeight/20,
  duration: 1, // Duration of the animation
  opacity: -3,
  ease: "power1.inOut" // Easing function for smoother movement
});

let y33 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-quote',
    start: "center 50%",
    end: "+=100%",
    pin: true,
    scrub: true,
    markers: false
  }
});

y33.from('#spread-awareness-quote', {
  y: window.innerHeight/5,
  duration: 1, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

let y34 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-quote',
    start: "center 49.5%",
    end: "+=75%",
    pin: true,
    scrub: true,
    markers: false
  }
});

y34.to('#spread-awareness-quote', {
  y: -window.innerHeight/20,
  duration: 1, // Duration of the animation
  opacity: -3,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t35 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-end1',
    start: "bottom 50%",
    end: "+=100%",
    pin: true,
    scrub: true,
    markers: false,

  }
});

t35.from('#spread-awareness-end1', {
  y: window.innerHeight/5,
  duration: 1, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t37 = gsap.timeline({
  scrollTrigger: {
    trigger: '#spread-awareness-end1',
    start: "bottom 49.5%",
    end: "+=300%",
    pin: true,
    scrub: true,
    markers: false,
    persist: true,
  }
});

t37.to('#spread-awareness-end1', {
  duration: 1, // Duration of the animation
  ease: "power1.inOut" // Easing function for smoother movement
});

let t38 = gsap.timeline({
  scrollTrigger: {
    trigger: '#copy-link-icon',
    start: "-50% 50%",
    end: "+=100%",
    pin: true,
    scrub: true,
    markers: false,
  }
});

t38.from('#copy-link-icon', {
  y: window.innerHeight/5,
  duration: 1, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

let t39 = gsap.timeline({
  scrollTrigger: {
    trigger: '#copy-link-icon',
    start: "-50% 49.5%",
    end: "+=400%",
    pin: true,
    scrub: true,
    markers: false,
    persist: true,
  }
});

t39.to('#copy-link-icon', {
  duration: 1, // Duration of the animation
  ease: "power1.inOut" // Easing function for smoother movement
});




