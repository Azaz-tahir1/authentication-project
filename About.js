var a=gsap.timeline();
a.from('.T1',{
    y:60,
    opacity:0,
    duration:2,
    repeat:1,
    stagger:0.5
})

a.from('.hi',{
    y:60,
    opacity:0,
    duration:2,
    repeat:-1,
    stagger:0.5
})



