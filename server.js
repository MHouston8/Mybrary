
//check if we are running in the development environment or the production environment

//if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config() //load all contents from .env file into application
//}// 

const express = require('express')

const app = express()

const expressLayouts = require('express-ejs-layouts')

//import routes into the server
const indexRouter = require('./routes/index')

//set ejs as view engine
app.set('view engine', 'ejs')

//set where views are coming from
app.set('views', __dirname + '/views') //__dirname is our current directory..//

//hookup express layoouts
app.set('layout', 'layouts/layout')

//tell app we want to use express layouts
app.use(expressLayouts)

//tell express where our public files are going to be.
app.use(express.static('public'))

//setup database
const mongoose = require('mongoose')

//setup connection to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

//log if we are connected to our database 
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

//tell application to use router
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000) //server is up and running at this point