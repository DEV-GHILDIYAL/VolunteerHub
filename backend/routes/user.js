const express = require('express');
const router = express.Router();
const passport = require('passport')


router.get('/logi',(req,res)=>{
    res.send("Hello there this is from backend routes js")
})
//logout


//get for google login
router.get('/auth/google',passport.authenticate('google',{scope:['profile']}))


router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/login/google'}),(req,res)=>{
    res.redirect('http://localhost:5173/')
})

module.exports = router