var tl = gsap.timeline();

tl.to("#full", {
    right: 0,
    duration: 0.3,
})

tl.from("#full h2", {
    x: 150,
    duration: 0.4,
    stagger: 0.2,
    opacity: 0,
})
tl.from("#full i", {
    opacity: 0,
})


tl.pause();

var menu = document.querySelector("#nav i");

menu.addEventListener("click", function() {
    tl.play();
})



var cross = document.querySelector("#full i");

cross.addEventListener("click", function() {
    tl.reverse();
})