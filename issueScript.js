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

//INTRO SECTION
//intro scroll title animation (to end position)
let t1 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro-title-container',
    start: "center 40%",
    end: "center 0%",
    scrub: true,
    markers: false
  }
});
t1.to('#intro-title-container', {
  y: -500, // Move upwards by 500 pixels
  duration: 2, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});


//intro text animation (to end position)
let t2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro-text-container',
    start: "center 48%",
    end: "center 0%",
    scrub: true,
    markers: false
  }
})
t2.to('#intro-text-container', {
  y: -500, // Move upwards by 500 pixels
  duration: 2, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});


//intro scroll text animation (to end position)
let t3 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro-scroll-text-container',
    start: "center 55%",
    end: "center 0%",
    scrub: true,
    markers: false
  }
})
t3.to('#intro-scroll-text-container', {
  y: -500, // Move upwards by 500 pixels
  duration: 2, // Duration of the animation
  opacity: -1,
  ease: "power1.inOut" // Easing function for smoother movement
});

//intro scroll icon animation (to end position)
let t4 = gsap.timeline({
  scrollTrigger: {
    trigger: '#intro-scroll-icon-container',
    start: "center 65%",
    end: "center 60%",
    scrub: true,
    markers: false
  }
})
t4.to('#intro-scroll-icon-container', {
  y: -window.innerHeight/30,
  opacity: -5,
  ease: "power1.inOut" // Easing function for smoother movement
});


// WHAT IS NEUROPLASTICITY SECTION

let y5 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-video-container',
    start: "25% 130%",
    end: "25% 30%",
    scrub: true,
    markers: false,
  }
});
y5.to("#clock-video", {
  y: -window.innerHeight, // Move the div to the top of the screen
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});

// Roads background
let t5 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-video-container',
    start: "25% 130%",
    end: "25% 30%",
    scrub: true,
    markers: false,
  }
});
t5.from("#roads-background-div", {
  y: window.innerHeight, // Move the div to the top of the screen
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//What is neuroplasticity title animation
let t6 = gsap.timeline({
  scrollTrigger: {
    trigger: '#plasticity-intro-title',
    start: "0% -70%",
    end: "0% -100%",
    scrub: true,
    markers: false,
    toggleActions: "play pause resume pause"
  }
});
t6.from("#plasticity-intro-title", {
  x: window.innerWidth,
  opacity: 0,
  duration: 2, // Duration of the animation in seconds
  ease: "power1.inOut", // Easing function for smooth animation
});


//What is neuroplasticity text 1 animation (from start position)
let t7 = gsap.timeline({
  scrollTrigger: {
    trigger: '#plasticity-intro-text-1',
    start: "0% -70%",
    end: "0% -100%",
    scrub: true,
    markers: false,
    toggleActions: "play pause resume pause"
  }
});
t7.from("#plasticity-intro-text-1", {
  x: window.innerWidth,
  opacity: 0,
  duration: 2, // Duration of the animation in seconds
  ease: "power1.inOut", // Easing function for smooth animation
});


//What is neuroplasticity text 1 animation (to end position)
let t8 = gsap.timeline({
  scrollTrigger: {
    trigger: '#plasticity-intro-text-1',
    start: "0% -170%",
    end: "0% -200%",
    scrub: true,
    markers: false,
    toggleActions: "play pause resume pause"
  }
});
t8.to("#plasticity-intro-text-1", {
  x: -window.innerWidth,
  opacity: 0,
  duration: 2, // Duration of the animation in seconds
  ease: "power1.inOut", // Easing function for smooth animation
});


//What is neuroplasticity text 2 animation (from start position)
let t9 = gsap.timeline({
  scrollTrigger: {
    trigger: '#plasticity-intro-text-2',
    start: "0% -200%",
    end: "0% -230%",
    scrub: true,
    markers: false,
    toggleActions: "play pause resume pause"
  }
});
t9.from("#plasticity-intro-text-2", {
  x: window.innerWidth,
  opacity: 0,
  duration: 2, // Duration of the animation in seconds
  ease: "power1.inOut", // Easing function for smooth animation
});


//What is neuroplasticity title animation (to end position)
let t10 = gsap.timeline({
  scrollTrigger: {
    trigger: '#plasticity-intro-title',
    start: "0% -305%",
    end: "0% -335%",
    scrub: true,
    markers: false,
    toggleActions: "play pause resume pause"
  }
});
t10.to("#plasticity-intro-title", {
  y: -window.innerHeight,
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power1.inOut", // Easing function for smooth animation
});


//What is neuroplasticity text 2 animation (going to start position)
let t11 = gsap.timeline({
  scrollTrigger: {
    trigger: '#plasticity-intro-text-2',
    start: "0% -300%",
    end: "0% -330%",
    scrub: true,
    markers: false,
    toggleActions: "play pause resume pause"
  }
});
t11.to("#plasticity-intro-text-2", {
  y: -window.innerHeight,
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power1.inOut", // Easing function for smooth animation
});


//IMPACT SECTION
let y2 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-video-container',
    start: "25% -220%",
    end: "25% -320%",
    scrub: true,
    markers: false,
  }
});
y2.to('#roads-background-div', {
  y: -window.innerHeight, // Move the div to the top of the screen
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});

//Background animation 
let t12 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-video-container',
    start: "25% -220%",
    end: "25% -320%",
    scrub: true,
    markers: false,
  }
});
t12.from('#attention-video-container', {
  y: window.innerHeight, // Move the div to the top of the screen
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Impact intro title animation (from start position)
let t13 = gsap.timeline({
  scrollTrigger: {
    trigger: '#impact-intro-title',
    start: "25% -360%",
    end: "25% -390%",
    scrub: true,
    markers: false,
  }
});
t13.from('#impact-intro-title', {
  y: window.innerHeight/5, // Move the div to the top of the screen
  opacity: 0,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Impact intro text animation (from start position)
let t14 = gsap.timeline({
  scrollTrigger: {
    trigger: '#impact-intro-text',
    start: "25% -360%",
    end: "25% -390%",
    scrub: true,
    markers: false,
  }
});
t14.from('#impact-intro-text', {
  y: window.innerHeight/5, // Move the div to the top of the screen
  opacity: 0,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Impact intro title animation (to end position)
let t15 = gsap.timeline({
  scrollTrigger: {
    trigger: '#impact-intro-title',
    start: "25% -440%",
    end: "25% -470%",
    scrub: true,
    markers: false,
  }
});
t15.to('#impact-intro-title', {
  x: -window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Impact intro text animation (to end position)
let t16 = gsap.timeline({
  scrollTrigger: {
    trigger: '#impact-intro-text',
    start: "25% -420%",
    end: "25% -450%",
    scrub: true,
    markers: false,
  }
});
t16.to('#impact-intro-text', {
  x: -window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Attention span title animation (from start position)
let t17 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-span-title',
    start: "25% -470%",
    end: "25% -500%",
    scrub: true,
    markers: false,
  }
});
t17.from('#attention-span-title', {
  x: window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Attention span text 1 animation (from start position)
let t18 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-span-text-1',
    start: "25% -470%",
    end: "25% -500%",
    scrub: true,
    markers: false,
  }
});
t18.from('#attention-span-text-1', {
  x: window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Attention span text 1 animation (to end position)
let t19 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-span-text-1',
    start: "25% -510%",
    end: "25% -540%",
    scrub: true,
    markers: false,
  }
});
t19.to('#attention-span-text-1', {
  x: -window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Attention span text 2 animation (from start position)
let r19 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-span-text-2',
    start: "25% -530%",
    end: "25% -560%",
    scrub: true,
    markers: false,
  }
});
r19.from('#attention-span-text-2', {
  x: window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Attention span text 2 animation (to end position)
let rr19 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-span-text-2',
    start: "25% -590%",
    end: "25% -620%",
    scrub: true,
    markers: false,
  }
});
rr19.to('#attention-span-text-2', {
  x: -window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Attention span title animation (to end position)
let t20 = gsap.timeline({
  scrollTrigger: {
    trigger: '#attention-span-title',
    start: "25% -610%",
    end: "25% -640%",
    scrub: true,
    markers: false,
  }
});
t20.to('#attention-span-title', {
  x: -window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Learning & memory title animation (from start position)
let t21 = gsap.timeline({
  scrollTrigger: {
    trigger: '#learning-memory-title',
    start: "25% -660%",
    end: "25% -690%",
    scrub: true,
    markers: false,
  }
});
t21.from('#learning-memory-title', {
  x: window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Learning & memory text 1 animation (from start position)
let t22 = gsap.timeline({
  scrollTrigger: {
    trigger: '#learning-memory-text-1',
    start: "25% -660%",
    end: "25% -690%",
    scrub: true,
    markers: false,
  }
});
t22.from('#learning-memory-text-1', {
  x: window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Learning & memory text 1 animation (to end position)
let t23 = gsap.timeline({
  scrollTrigger: {
    trigger: '#learning-memory-text-1',
    start: "25% -700%",
    end: "25% -730%",
    scrub: true,
    markers: false,
  }
});
t23.to('#learning-memory-text-1', {
  x: -window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Learning & memory text 2 animation (from start position)
let t24 = gsap.timeline({
  scrollTrigger: {
    trigger: '#learning-memory-text-2',
    start: "25% -720%",
    end: "25% -750%",
    scrub: true,
    markers: false,
  }
});
t24.from('#learning-memory-text-2', {
  x: window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Learning & memory text 2 animation (to end position)
let t25 = gsap.timeline({
  scrollTrigger: {
    trigger: '#learning-memory-text-2',
    start: "25% -780%",
    end: "25% -810%",
    scrub: true,
    markers: false,
  }
});
t25.to('#learning-memory-text-2', {
  x: -window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//Learning & memory title animation (to end position)
let t26 = gsap.timeline({
  scrollTrigger: {
    trigger: '#learning-memory-title',
    start: "25% -790%",
    end: "25% -820%",
    scrub: true,
    markers: false,
  }
});
t26.to('#learning-memory-title', {
  x: -window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//potential & adaptation title animation (from start position)
let t27 = gsap.timeline({
  scrollTrigger: {
    trigger: '#potential-title',
    start: "25% -810%",
    end: "25% -840%",
    scrub: true,
    markers: false,
  }
});
t27.from('#potential-title', {
  x: window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//potential & adaptation text animation (from start position)
let t28 = gsap.timeline({
  scrollTrigger: {
    trigger: '#potential-text',
    start: "25% -810%",
    end: "25% -840%",
    scrub: true,
    markers: false,
  }
});
t28.from('#potential-text', {
  x: window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});


//potential & adaptation button animation (from start position)
let t29 = gsap.timeline({
  scrollTrigger: {
    trigger: '#discover-solutions-button-div',
    start: "25% -810%",
    end: "25% -840%",
    scrub: true,
    markers: false,
  }
});
t29.from('#discover-solutions-button-div', {
  x: window.innerHeight, // Move the div to the top of the screen
  opacity: -1,
  duration: 2, // Duration of the animation in seconds
  ease: "power2.inOut", // Easing function for smooth animation
});

