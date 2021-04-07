/**
 *  /routes/api/categories.js
 *  @description:  all routes with '/api/v1/categories'
*/

const JWTAuth = require('../../middlewares/verifyToken')

const CATEGORY_CONTROLLER = require('../../controllers/CategoryController')
const CATEGORY_ROUTER = require('express').Router()

const categories = new CATEGORY_CONTROLLER

CATEGORY_ROUTER.use(JWTAuth)
CATEGORY_ROUTER.route('/').get(categories.get)


module.exports = CATEGORY_ROUTER