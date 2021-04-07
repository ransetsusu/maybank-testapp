/**
 * /routes/api/index.js
 *  @description: Index file for API application. all routes with 'api/<api_version/'
 */

const API_ROUTER = require('express').Router();

// index route
API_ROUTER.get('/', (req, res) => {
    res.send({'message': 'API index route'});
})

API_ROUTER.use('/auth', require("./auth"));
API_ROUTER.use('/products', require("./product"));
API_ROUTER.use('/categories', require("./category"));
API_ROUTER.use('/merchants', require("./merchant"));
API_ROUTER.use('/gender-tags', require("./gender_tag"));

module.exports = API_ROUTER
