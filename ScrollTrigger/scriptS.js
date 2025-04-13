gsap.from("#page1 #box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    borderRadius: "100%"
})


gsap.from("#page2 #box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    borderRadius: "100%",
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "botttom 10%",
        scrub: 2,

    }
})


gsap.from("#page3 #box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    borderRadius: "100%",
    scrollTrigger: "#page3 #box"
})