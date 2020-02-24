const express = require('express')

//get router from express
const router = express.Router()

router.get('/', (req, res) => {
    //pass in name of view
    res.render('index')
})

//export the router for the application
module.exports = router