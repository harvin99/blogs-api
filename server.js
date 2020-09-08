require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")

const apiBlogsRouter = require('./api/routes/api.blogs.router')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify : false
})
//Connect mongoose 
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected !!!')
})
const app = express()

//For body parser 
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

//For API
app.use(cors())

app.use('/api/blogs', cors(), apiBlogsRouter)

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, () => {
    console.log("Your app is listening on port " + listener.address().port)
  })
