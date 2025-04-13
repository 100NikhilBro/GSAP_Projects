// part1

var h1 = document.querySelector("#animate");

var text = h1.textContent;

var splitText = text.split("");

console.log(splitText);

var halfValue = Math.floor(splitText.length / 2);

var clutter = "";

splitText.forEach((val, index) => {

    if (index < halfValue) {
        clutter = clutter + `<span class="a">${val} </span>`;
    } else {
        clutter = clutter + `<span class="b">${val} </span>`;
    }
})

h1.innerHTML = clutter;

//-----------------------------------------//

// part2

gsap.from("#animate .a", {
    opacity: 0,
    stagger: 0.15,
    y: 70,
    duration: 0.6,
})



gsap.from("#animate .b", {
    opacity: 0,
    stagger: -0.15,
    y: 70,
    duration: 0.6,

})