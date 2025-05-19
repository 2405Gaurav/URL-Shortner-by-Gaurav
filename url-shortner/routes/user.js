const express=require('express')
const router=express.Router()
const {handleusersignup,handleuserlogin}=require('../controller/user')


router.post('/',handleusersignup)
router.post('/login',handleuserlogin)




module.exports=router