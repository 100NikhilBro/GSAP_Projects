var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");



main.addEventListener("mousemove", function(dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "circ.out"
    })
})


imageDiv.addEventListener("mouseenter", function() {
    cursor.innerHTML = "VIEW MORE"
    gsap.to(cursor, {
        scale: 2,
        backgroundColor: "rgba(255, 255, 255, 0.56)",
    })
})


imageDiv.addEventListener("mouseleave", function() {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "white"
    })
})