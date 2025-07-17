gsap.to('.box',{
    x:100,
    duration:3,
    yoyo:true,
    repeat:-1
})
var  free=gsap.timeline();
free.to('.box form ',{
 x:50,
    duration:2,
    yoyo:true,
    stagger:0.5
})
