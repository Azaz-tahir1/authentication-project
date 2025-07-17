const express=require('express')
const app=express();
const cookieParser=require('cookie-parser');
const { name } = require('ejs');



app.use(cookieParser('mypassword'))



app.get('/',(req,res)=>{



 const home='home page'



  const value=req.cookies.name;
  if(!value){
    res.send(` ${home} :  no found`)
  }
  else{
        res.send(`${home} : your cookie name is ${value}  `)

  }



})


app.get('/set-cookie',(req,res)=>{
    res.cookie('name','laiqa Tahir',


        {
            maxAge:900000,  // 15 min   1000*60*15
            httpOnly:true,
            signed:true

        }
    )

res.send('cookie has been set')

}

)


app.get('/get-cookie',(req,res)=>{
  const value=req.signedCookies.name;
  if(!value){
    res.send('no found')
  }
  else{
        res.send(`your cookie name is ${value}  `)

  }
})


app.get('/delete-cookie',  (req,res)=>{
res.clearCookie('name')
res.send('it has been deleted')
})

app.listen(3000, ()=>{console.log('done!!!')})