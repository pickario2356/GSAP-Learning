// Basic
// gsap.from("#box1", {
//   // initial bole to pehle kaha hogi fir end mai apne orgnl pai aaygei
//   x: 500, // mtlb 500 saiu 0
//   duration: 2,
//   delay: 1,
// });
// gsap.to("#box2", {
//   // final value jo orgnl sai final pai hote bue hogi animation
//   x: 400, // mtlb 0 saiu 400
//   duration: 1,
//   delay: 1,
//   backgroundColor: "orange",
//   borderRadius: "30",
//   rotate: "90",
// });

// gsap.from("h1", {
//   opacity: 0,
//   duration: 1,
//   delay: 1,
//   y: 30,
//   //   stagger: -1,// ulta
//   stagger: 0.3, // agla element ko lane mai kitna time
// });

// gsap.to("#box2", {
//   // final value jo orgnl sai final pai hote bue hogi animation
//   x: 400, // mtlb 0 saiu 400
//   duration: 1,
//   delay: 1,
//   backgroundColor: "orange",
//   borderRadius: "30",
//   rotate: "180",
//   //   repeat: 2, // mtlb 3 cuz ek baar to wese hi aur baki 2 repeat jo add kiye
//   repeat: -1, // -1 mtlb infinity
//   yoyo: true,
// });

// TIMELINE
// gsap.to("#box1", {
//   x: 500,
//   duration: 1.5,
//   delay: 1,
// });
// gsap.to("#box2", {
//   x: 500,
//   backgroundColor: "pink",
//   rotate: 180,
//   duration: 1.5,
//   delay: 2.5,
// });
// gsap.to("#box3", {
//   x: 500,
//   borderRadius: 100,
//   scale: 0.7,
//   duration: 1.5,
//   delay: 4, // yaha delay mai calculation kafi ho sakti ho toh uske lye
// });

var tl = gsap.timeline();

tl.from(".nav h2", {
  y: -40,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl.from(".nav .optn h4", {
  y: -40,
  opacity: 0,
  duration: 1,
  //delay: 3, // bss pehla element pai ye delay work kerga
  stagger: 0.5,
});
