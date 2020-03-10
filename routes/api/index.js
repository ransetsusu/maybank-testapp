/**
 * /routes/api/index.js
 *  @description: Index file for API application. all routes with 'api/<api_version/'
 */

const APIROUTER = require('express').Router();

// index route
APIROUTER.get('/', (req, res) => {
    res.send({'message': 'API index route'});
})

APIROUTER.use('/auth', require("./auth"));
APIROUTER.use('/products', require("./product"));

module.exports = APIROUTER