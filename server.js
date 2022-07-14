require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', err => {
  console.log(err)
})

db.on('open', () => {
  console.log('Connected to MongoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

//TODO: Set up routes from controllers

const userController = require('./controllers/userController')
const  = require('./controllers/')
const  = require('./controllers/')
const userController = require('./controllers/userController')

app.use('/api/jobs', jobsController)
//getting all jobs
app.use('/api/jobs/:jobsId/comments', commentsController)
//getting comments of specific job post
app.use('/api/jobs/:id/somethingController', somethingController) //replace somethingController

app.use('/api/user', userController)
//getting users

app.get('/', (req, res) => {
  res.send('information....') //replace information
})
app.use(express.static(`${__dirname}/client/build`))

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log('success' + PORT)
})

module.exports = app