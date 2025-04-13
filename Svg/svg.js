var path = `M 10 100 Q 500 100 990 100`;

var finalPath = "M 10 100 Q 500 100 990 100"

var string = document.querySelector("#String");

string.addEventListener("mousemove", function(dets) {
    path = `M 10 100 Q ${dets.x}  ${dets.y}  990 100`;

    gsap.to("svg path", {
        attr: {
            d: path,
            duration: 0.3,
            ease: "power3.out",

        }
    })

})


string.addEventListener("mouseleave", function() {
    gsap.to("svg path", {
        attr: { d: finalPath },
        ease: "elastic.out(1,0.2)",
        duartion: 2,
    })
})