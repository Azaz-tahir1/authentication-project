// 

const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({


    username:{
        type:String,
        required:true,
        unique:true
    },

       userpassword:{
        type:String,
        required:true
    }


})
 module.exports=mongoose.model('Saving',userSchema)






