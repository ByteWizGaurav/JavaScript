let tl = gsap.timeline();
let t2 = gsap.timeline();
let secondWidth = document.querySelector("#second section").clientWidth;
gsap.registerPlugin(ScrollTrigger)

tl.from("nav ul li p, nav ul li a, nav ul li button", {
    duration: 1,
    opacity: 0,
    y: -100,
    delay: 1,
    stagger: 0.3,
});

tl.from(".main h1, .main p", {
    duration: 2,
    opacity: 0,
    x: -50,
})

t2.from("#second section h1, #second section p", {
    x: -secondWidth,
    stagger: 0.4,
    opacity: 0,
    duration: 2,
    // delay: 1,
    scrollTrigger:{
        trigger: "#second", 
        start: "top 80%",
        markers: true,
    },
})
