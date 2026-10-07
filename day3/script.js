var path = `M 10 100 Q 500 0 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");
//list as many as you'd like

string.addEventListener("mousemove", function (dets) {
  // console.log(dets.y)
  path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
  // console.log(path)

  gsap.to("svg path", {
    attr: {
      d: path, // path kai and d naam ka attr hai
    },
    duration: 0.2,
    ease: "power2.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalPath,},
    duration: 1,
    ease: "elastic.out(1,0.3)",
  });
});
