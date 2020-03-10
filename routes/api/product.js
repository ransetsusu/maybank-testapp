/**
 *  /routes/api/product.js
 *  @description: Index file for authentication page. all routes with '/api/v1/products'
*/

const JWTAuth = require('../../middlewares/verifyToken')

const PRODUCTROUTER = require('express').Router()
const PRODUCT_CONTROLLER = require('../../controllers/ProductController')

const product = new PRODUCT_CONTROLLER

PRODUCTROUTER.use(JWTAuth)
PRODUCTROUTER.route('/').get(product.get)


module.exports = PRODUCTROUTER
