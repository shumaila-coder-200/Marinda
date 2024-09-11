const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let tl = gsap.timeline();
tl.to("#page", {
    y: "100vh",
    duration: 0,
    scale:0.6,
})
tl.to("#page", {
    y: "30vh",
    duration: 1,
    delay: 1,
})
tl.to("#page", {
    y: "0vh",
    rotate:360,
    duration: 0.8,
    scale:1,
})