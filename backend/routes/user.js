const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/login',(req,res)=>{
    res.send("Hello there this is from backend routes js")
})

//get for google login
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}))

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/login?auth=failed'}),(req,res)=>{
    // res.redirect('/profile?auth=success')
    res.redirect('http://localhost:5173/profile')
})

router.get('/logout',(req,res,next)=>{
    req.logout((err)=>{
        if(err){return next(err)}

        //remove session key after logout not working currently
        // req.session.destroy((err)=>{
            // if (err) { return next(err); }
            // res.clearCookie(''); // Clear session cookie
            res.redirect('http://localhost:5173/')
        // })
    })
})

router.get('/login/success',async (req, res) => { 
    if(req.user){
        res.status(200).json({message:"user login",user:req.user})

    }else{
        res.status(400).json({message:"Not authorized"})
    }

});
module.exports = router