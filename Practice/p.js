//  Basic Use Of to and From in Gsap Animation


// gsap.to("#box1", {
//     x: 500,
//     y: 200,
//     duration: 1,
//     delay: 0.5,
//     repeat: -3,
//     rotate: 360,
//     scale: 0.5,
//     backgroundColor: "yellow",
//     yoyo: true,
//     borderRadius: "50%"
// })


// gsap.from("#box2", {
//     x: 500,
//     y: 200,
//     duration: 1,
//     delay: 0.5,
//     repeat: -2,
//     rotate: 360,
//     scale: 0.5,
//     backgroundColor: "green",
//     yoyo: true,
//     borderRadius: "50%"
// })


// gsap.from("#box3", {
//     x: 500,
//     y: 200,
//     duration: 2,
//     delay: 0.5,
//     repeat: -2,
//     rotate: 360,
//     scale: 0.5,
//     backgroundColor: "red",
//     yoyo: true,
//     opacity: 0,
// })


// TimeLine in Gsap Animation

var tl = gsap.timeline();

gsap.from("#page1 #box1", {
    opacity: 0,
    duration: 2,
    borderRadius: "30%",
    scale: 0.2,
    scrollTrigger: "#page1",
})



gsap.from("#page1 #box2", {
    opacity: 0,
    duration: 2,
    borderRadius: "30%",
    scale: 0.2,
    scrollTrigger: "#page1",
})


gsap.from("#page1 #box3", {
    opacity: 0,
    duration: 2,
    borderRadius: "30%",
    scale: 0.2,
    scrollTrigger: "#page1",
})


gsap.from("#page2 #box1", {
    opacity: 0,
    duration: 2,
    borderRadius: "30%",
    scale: 0.2,
    scrollTrigger: "#page2",
})


gsap.from("#page2 #box2", {
    opacity: 0,
    duration: 2,
    borderRadius: "30%",
    scale: 0.2,
    scrollTrigger: "#page2",
})

gsap.from("#page2 #box3", {
    opacity: 0,
    duration: 2,
    borderRadius: "30%",
    scale: 0.2,
    scrollTrigger: "#page2",
})


gsap.from("#page3 #box1", {
    opacity: 0,
    duration: 2,
    borderRadius: "30%",
    scale: 0.2,
    scrollTrigger: "#page3",
})


gsap.from("#page3 #box2", {
    opacity: 0,
    duration: 2,
    borderRadius: "30%",
    scale: 0.2,
    scrollTrigger: "#page3",
})

gsap.from("#page3 #box3", {
    opacity: 0,
    duration: 2,
    borderRadius: "30%",
    scale: 0.2,
    scrollTrigger: "#page3",
})