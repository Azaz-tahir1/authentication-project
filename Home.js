alert('Welcome')
var c=gsap.timeline()

c.from('#up h1',{
  y: 80,
  duration:1,
  repeat:-1,
  stagger:0.3 ,
    opacity:0

})

c.from('#up p',{
  y: 80,
  duration:1,
  repeat:-1,
  stagger:0.3,
  opacity:0
})







c.from('#sm1 p',{
  y: 80,
  duration:1,
  repeat:-1,
  stagger:0.5 ,
    opacity:0

})


c.from('#sm2 p',{
  y: 80,
  duration:1,
  repeat:-1,
  stagger:0.5 ,
    opacity:0

})

c.from('#sm3 p',{
  y: 80,
  duration:1,
  repeat:-1,
  stagger:0.5 ,
    opacity:0

})



c.from('#sm4 p',{
  y: 80,
  duration:1,
  repeat:-1,
  stagger:0.5 ,
    opacity:0

})


c.from('#sm5 p',{
  y: 80,
  duration:1,
  repeat:-1,
  stagger:0.5 ,
    opacity:0

})




c.from('#sm6 p',{
  y: 80,
  duration:1,
  repeat:-1,
  stagger:0.5 ,
    opacity:0

})




gsap.from('.g1',{
  y: 80,
  duration:0.5,
  repeat:-1,
  stagger:0.5 ,
    opacity:0

})

gsap.from('.start',{
  x:80,
  duration:1.9,
  repeat:-1,
  opacity:0
})
function abc(){
  alert('Good Desicion')
}