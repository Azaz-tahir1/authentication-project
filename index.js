const express=require('express');
const app=express();
const session=require('express-session')
const bcrypt=require('bcryptjs')
const mongoose=require('mongoose')
const User=require('./model/schema')

///connection

mongoose.connect('mongodb://127.0.0.1/Store')
.then(()=>{console.log('Connected successfully')}  )




//middlewares
 app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine','ejs')
app.use(express.static('public'))

app.use(session({
    secret:'secret123',
    resave:false,
    saveUninitialized:false
}))

const checkLogin=(req,res,next)=>{
    if(req.session.user){
        next()
    }else{
        res.redirect('/login')
    }
}


//router



app.get('/',checkLogin,(req,res)=>{
res.render('Home')
})


 app.get('/about',checkLogin,(req,res)=>{
    res.render('About')
})


 app.get('/service',checkLogin,(req,res)=>{
    res.render('service')
})

 app.get('/contact',checkLogin,(req,res)=>{
    res.render('contact')
})


app.get('/register',(req,res)=>{
    res.render('register', {error:null})
})
//page khulny k bad ki working
app.post('/register', async (req,res)=>{
    const {username,userpassword}=req.body;
    const hashedPassword= await bcrypt.hash(userpassword,10);
    await User.create({username,userpassword:hashedPassword}) 
  res.redirect('/login')
})





app.get('/login',(req,res)=>{

    if(req.session.user){
        res.redirect('/')
    }else
    {
        res.render('login', {error:null} )
}




})



// //page khulny k bad
app.post('/login',async(req,res)=>{
 const {username,userpassword}=req.body;

   //username
  const user=await User.findOne({username})
  if(!user) return res.render('login',  {error:'we did not find your reqested username'})
   
   
    ///password
    const isMatch=await bcrypt.compare(userpassword,user.userpassword)
  if(!isMatch) return res.render('login',  {error:'Invalid password'})

req.session.user=username;

   res.redirect('/')
    
})

app.get('/logout',(req,res)=>{
req.session.destroy( ()=>{
    res.redirect('/login')
} )
})

app.listen(3000,()=>{
    console.log('Done!!!!')
})