const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const path = require('path')
const cors = require('cors');

//config connection
dotenv.config({path:'./config/.env'})

//passport connection
require('./config/google')(passport)

//database connection
connectDb()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));


app.use(express.urlencoded({extended:false}))
app.use(express.json())//for json data

//session
app.use(
    session({
    secret:'shiwans',
    resave:false,
    saveUninitialized:false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        collectionName:'sessions',
        ttl: 1 * 24 * 60 * 60 // Session TTL in seconds (1 days in this example
    })
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