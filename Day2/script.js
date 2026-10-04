// gsap.from("#page1 #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
// });
// gsap.from("#page2 #box", {
//   scale: 0,
//   x: 300,
//   duration: 1,
//   rotate: 760,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroll: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 20%",
//     scrub: 2,
//   },
// });

gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  // duration:2,
  scrollTrigger: {
    trigger: "#page2",
    scroll: "body",
    markers: true,
    start: "top 0",
    end:"top -100%",
    scrub:true,
    pin:true,
  },
});
