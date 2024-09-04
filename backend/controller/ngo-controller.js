const Ngo = require('../models/Ngo');

const create = async(req,res)=>{
    try {
        const {eventName,description,location,date,category,organizer,ngoName}= req.body;
        const eventExist = await Ngo.findOne({eventName})

        if(eventExist){
            return res.status(400).json({message:'Event Name already taken'})
        }

        const eventCreated = await Ngo.create({eventName,description,organizer,ngoName,category,location,date})
        res.status(200).json({msg:"Event registered succefully", })
    } catch (error) {
        console.log(error)
        res.status(500).json({message:
            "Server error"
        })
    }
}

const getEvent = async(req,res)=>{
    try {
        const events = await Ngo.find()
        res.status(200).json({msg:"Events sent succesfully"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:
            "Server error"
        })
    }
}

module.exports = {create, getEvent}