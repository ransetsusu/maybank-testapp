/**
 *  /routes/api/gender_tag.js
 *  @description:  all routes with '/api/v1/gender-tags'
*/

const JWTAuth = require('../../middlewares/verifyToken')

const GENDER_TAG_CONTROLLER = require('../../controllers/GenderTagController')
const GENDER_TAG_ROUTER = require('express').Router()

const gender_tag = new GENDER_TAG_CONTROLLER

GENDER_TAG_ROUTER.use(JWTAuth)
GENDER_TAG_ROUTER.route('/').get(gender_tag.get)


module.exports = GENDER_TAG_ROUTER