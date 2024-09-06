// tl.from("h1",{
    
//     y:30,
//     duration:2,
//     delay:1,
//     opacity:0
    
// })
//Time line for move element one by one
// let tl=gsap.timeline();
// tl.from(".box1",{
//     x:1000,
//     duration:1,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
//     STAGGER:1
//     // repeat:3,
//     // yoyo:true
// })
// tl.to(".box2",{
//     x:1000,
//     duration:1,
//     delay:1,
//     rotate:360,
//     backgroundColor:"black",
//     borderRadius:"50%",
//     // repeat:3,
//     // yoyo:true
// })
// tl.from(".box3",{
//     x:1000,
//     duration:1,
//     delay:1,
//     rotate:360,
//     backgroundColor:"pink",
//     borderRadius:"50%",
//     // repeat:3,
//     // yoyo:true
// })
//Gsap fro navbar
let tl=gsap.timeline();
tl.from("h1",{
    y:-30,
    delay:1,
    duration:.5,
    opacity:0
})
tl.from("p",{
    y:-30,
    duration:.5,
    opacity:0,
    stagger:1
})