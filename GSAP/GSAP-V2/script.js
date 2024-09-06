let tl=gsap.timeline();
tl.from(".page1 .box1",{

    y:-1000,
    scale:0,
    duration:1,
    opacity:0
})
tl.from(".page1 .box2",{
  
    y:1000,
    scale:0,
    duration:1,
    opacity:0
})
tl.from(".page1 .box3",{

    y:-1000,
    scale:0,
    duration:1,
    opacity:0
})
tl.from(".page1 .box4",{

    y:1000,
    scale:0,
    duration:1,
    opacity:0
})
tl.from(".page1 .box5",{

    y:-1000,
    scale:0,
    duration:1,
    opacity:0
})
gsap.from(".page3 .box",{
    scale:0,
    duration:2,
    rotate:360,
    scrollTrigger:{
        trigger:".page3 .box",
        scroller:"body",
        //  markers:true,
        start:"top -50%",
        end:"top 50%",
        scrub:2
    }
})
gsap.to(".page2 h1",{
    transform:"translateX(-30%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true


    }

})