gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("body", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
});

// this will add the refresh() method to the ScrollTrigger class.
ScrollTrigger.prototype.refresh = function(hard) {
    gsap.utils.refresher.refresh(this, hard);
}

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

let tl = gsap.timeline();
let secondWidth = document.querySelector("#second section").clientWidth;

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

gsap.from("#second section", {
    x: -secondWidth,
    // stagger: 1,
    opacity: 0,
    duration: 2,
    // delay: 1,
    scrollTrigger:{
        trigger: "#second", 
        start: "top 80%",
        // onUpdate: ()=>{console.log("chal gya h")},
        markers: true,
    },
})

gsap.from("#third .box", {
    scale: 0,
    rotate: 360,
    // stagger: 1,
    opacity: 0,
    duration: 2,
    scrollTrigger:{
        trigger: "#third", 
        start: "top 50%",
        end: "top top",
        // onUpdate: ()=>{console.log("chal gya h")},
        markers: true,
        scrub: true,
    },
})