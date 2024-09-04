const mongoose = require('mongoose')

const NgoSchema = new mongoose.Schema({
    eventName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:String,
    },
    category:{
        type:String,
        required:true
    },
    organizer:{
        type:String,
        required:true
    },
    ngoName:{
        type:String,
        required:true,
    },time:{
        type: String,
        required:true
    },
    
    // },status:{
    //     type:String ,
    //     required:true
    // },
    // // image:{
    // //     type: ,
    // //     required:true
    // // },
    // expectedAttendance:{
    //     type: Number,
    //     required:true
    // },costs:{
    //     type:String,
    //     required:true
    // },registrationDetails:{
    //     type:String,
    //     required:true
    // },notes:{
    //     type:String,
    //     required:true
    // },
    createdAt: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Ngo',NgoSchema)