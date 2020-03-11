/**
 *  /routes/api/merchant.js
 *  @description:  all routes with '/api/v1/merchants'
*/

const JWTAuth = require('../../middlewares/verifyToken')

const MERCHANT_CONTROLLER = require('../../controllers/MerchantController')
const MERCHANT_ROUTER = require('express').Router()

const merchant = new MERCHANT_CONTROLLER

MERCHANT_ROUTER.use(JWTAuth)
MERCHANT_ROUTER.route('/').get(merchant.get)


module.exports = MERCHANT_ROUTER