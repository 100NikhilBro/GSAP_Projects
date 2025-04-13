function BreakTheText() {
    var h1 = document.querySelector("h1");

    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");

    var halfVal = Math.floor(splittedText.length / 2);


    var clutter = "";





    splittedText.forEach((elem, idx) => {

        if (halfVal > idx) {
            clutter = clutter + `<span class="a">${elem}</span>`;
        } else {
            clutter = clutter + `<span class="b">${elem}</span>`;
        }

    })


    h1.innerHTML = clutter;


    console.log(clutter);
}


BreakTheText(); // yeh ek fn hai jisme aoun ne tect ko toda hai bs



gsap.from("h1 .a", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})


gsap.from("h1 .b", {
    y: 50,
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
    stagger: -0.15
})