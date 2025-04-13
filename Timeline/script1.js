// // Abhi jo duation aur delay ko dekha ---> Timeline Lageyenge

// // gsap.to("#box1", {
// //     x: 1000,
// //     rotate: 360,
// //     delay: 1,
// //     duration: 2,
// //     backgroundColor: "purple"
// // })

// // gsap.to("#box2", {
// //     x: 1000,
// //     rotate: 360,
// //     delay: 3,
// //     duration: 2,
// //     backgroundColor: "blue",
// //     borderRadius: "50%"
// // })

// // gsap.to("#box3", {
// //     x: 1000,
// //     rotate: 360,
// //     delay: 5,
// //     duration: 2,
// //     backgroundColor: "green",
// //     borderRadius: "20%"
// // })



// // jb apun timeline ka use krte hai to phirr apne ko delay ka yaad nhi rakhna hota hai

// var tl = gsap.timeline();

// tl.to("#box1", {
//     x: 1000,
//     duration: 1.5,

// })

// tl.to("#box2", {
//     x: 1000,
//     duation: 1.5
// })


// tl.to("#box3", {
//     x: 1000,
//     duation: 1.5
// })



var tl = gsap.timeline();

tl.from("#nav #h1", {
    opacity: 0,
    duration: 1,
    delay: 0.5,
    y: -20,
})

tl.from("#navVal h1", {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
    y: -20
})


tl.from(".CenterHead h1", {
    opacity: 0,
    duration: 1,
    scale: 1.2,
    fontSize: 50
})