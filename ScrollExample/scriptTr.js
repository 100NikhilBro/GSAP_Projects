gsap.to("#p2 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
        trigger: "#p2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true
    }
})