const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL,{})
        console.log(`Mongodb connected`)

    }catch(error){
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDb