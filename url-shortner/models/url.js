const mongoose=require('mongoose')
const { applyTimestamps } = require('./url')

const userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailid:{
        type:String,
        unique:true,
        required:true,

    },
    password:{
        type : String,
        required:true,
    }
},{timestamps:true})

const users=mongoose.model('users',userschema)
module.exports=users