const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    displayName:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    loginType:{
        type:String,
        required:true
    },
    createdAt: {
        type:Date,
        defautl:Date.now
    }
})

module.exports = mongoose.model('User',UserSchema)