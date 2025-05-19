const user=require('../models/users')

 async function  handleusersignup (req,res){
    const {name,emailid,password}=req.body
    await user.create({
        name,
        emailid,
        password,
    })
    // return res.render("home")
    

 }
 module.exports={
        handleusersignup,
    }