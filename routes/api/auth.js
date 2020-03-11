/**
 *  /routes/api/auth.js
 *  @description: Index file for authentication page. all routes with '/api/v1/auth'
*/

const AUTHROUTER =  require("express").Router()
const AUTH_CONTROLLER = require('../../controllers/AuthController')

var auth = new AUTH_CONTROLLER

AUTHROUTER.route('/').post(auth.login)


module.exports = AUTHROUTER