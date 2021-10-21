var tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to('.intro', {y: '100%', duration:1.5}, '-=0.2');
tl.fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1},'-=1.4');


gsap.from(".face", {
    opacity: 0, 
    x: 175, 
    duration: 1,
    delay:2.5,
  });

