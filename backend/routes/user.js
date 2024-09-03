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
    res.redirect('/login')
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

router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
        // Return user profile data if authenticated
        // res.json({
        //     name: req.user.name,
        //     email: req.user.email
        //     // Additional user info
        // });
    } else {
        // Return dummy values if not authenticated
        // res.json({
        //     name: 'Guest',
        //     email: 'guest@example.com'
        // });
    }
});
module.exports = router