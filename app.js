// load configurations
var dotenv = require('dotenv')
dotenv.config()
var express = require('express')
var config = require('config')
var cors = require('cors')

var app = express()
var logger = require('morgan')

// define basedir global for later use
global._basedir = __dirname

/**
 * @description Application security, config
 */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(logger('dev'))


/**
 * @description Database config/bootstrap
 */
require('./models/index')


app.get('/', (req, res) => {
    res.send('API for product management')
})

/**
 * @description Routing part of the app
 */
require('./routes')(app, config)


const PORT = process.env.PORT || '5000'
const NODE_ENV = process.env.NODE_ENV || 'development'

if (NODE_ENV == 'development') console.log(`App is listening on port ${PORT}`)


module.exports = app.listen(PORT)
