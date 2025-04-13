function Page1Animation() {
    var tl = gsap.timeline();

    tl.from("#nav #title #wizard", {
        y: -30,
        duration: 0.5,
        opacity: 0,
        delay: 1
    })

    tl.from("#nav #sideBar h2 , #req", {
        y: -30,
        duration: 0.3,
        opacity: 0,
        stagger: 0.2,
    })


    tl.from("#Hero #hero1 #heroheading h3 , #para p , #butt #book", {
        x: -500,
        opacity: 0,
        duration: 0.4,
        stagger: 0.3,
    })
    tl.from("#Hero #hero2 #announce", {
        opacity: 0,
        duration: 0.5,
        x: 100,
    }, "-=1")


    tl.from("#Animated #image img ", {
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 0.4,
    })
}

Page1Animation();



var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#service #ss ",
        scroll: "body",
        // markers: true,
        start: "top 60%",
        scrub: 2,
        end: "top 0%",
    }
})

tl2.from("#service #ss h4 , p", {
    opacity: 0,
    x: -100,
    duration: 0.4,
})


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#gridServices",
        scroll: "body",
        // markers: true, 
        start: "bottom 110%",
        scrub: 3,
        end: "bottom 120%",
    }
})

tl3.from("#gridServices #card1", {
    opacity: 0,
    x: -100,
    duration: 1,
}, "a")

tl3.from("#gridServices #card2", {
    opacity: 0,
    x: 100,
    duration: 1,
}, "a")