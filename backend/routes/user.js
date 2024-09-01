const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/logi',(req,res)=>{
    res.send("Hello there this is from backend routes js")
})
//logout


//get for google login
router.get('/auth/google',passport.authenticate('google',{scope:['profile']}))


router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'http://localhost:5173/auth/google'}),(req,res)=>{
    res.redirect('http://localhost:5173/')
    console.log("logged in")
})

router.get('/logout',(req,res,next)=>{
    req.logout((err)=>{
        if(err){return next(err)}
        res.redirect('http://localhost:5173/')
        console.log("logout succesfull")
    })
})

module.exports = router