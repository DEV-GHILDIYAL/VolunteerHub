const express = require('express');
const router = express.Router();
const passport = require('passport')

//get for google login
router.get('/auth/google',passport.authenticate('google',{scope:['profile','email']}))

router.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/login?auth=failed'}),(req,res)=>{
    // res.redirect('/profile?auth=success')
    res.redirect('http://localhost:5173/profile')
})

// router.get('/logout',(req,res,next)=>{
//     req.logout(function(err){
//         if(err){return next(err)}
//         res.redirect("http://localhost:5173");
//     })
// })
router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send("Logout failed");
        }
        res.clearCookie('connect.sid'); // This clears the cookie from the client-side
        res.redirect('http://localhost:5173'); // Redirect to the login page or another route
    });
});

router.get('/login/success',async (req, res) => { 
    if(req.user){
        res.status(200).json({message:"user login",user:req.user})

    }else{
        res.status(400).json({message:"Not authorized"})
    }

});
module.exports = router