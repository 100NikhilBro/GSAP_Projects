gsap.to("#box", {
    x: 1000,
    y: 300,
    duration: 2,
    delay: 0,
    yoyo: true,
    rotate: 360,
    backgroundColor: "blue",
    repeat: 2,
    borderRadius: "50%",
    scale: 0.3,
})


gsap.from("h1", {
    color: "red",
    delay: 1,
    duration: 2,
    // repeat: -1,
    opacity: 0,
    stagger: -2,
})