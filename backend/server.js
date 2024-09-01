const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const path = require('path')

//config connection
dotenv.config({path:'./config/.env'})

//passport connection
require('./config/google')(passport)

//database connection
connectDb()

app.use(express.urlencoded({extended:false}))
app.use(express.json())//for json data

//storing session
const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URL,
    collectionName:'sessions'
})

//session
app.use(
    session({
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:false,
    store: store
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//static folder
app.use(express.static(path.join(__dirname,'public')))

//routes connection
app.use('/',require('./routes/user'))
// app.use('/admin',require('./routes/admin'))
// app.use('/ngo',require('./routes/ngo'))

const PORT = process.env.PORT || 5500
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`))