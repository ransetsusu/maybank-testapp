const jwt = require('jsonwebtoken')

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @description Verify jwt token
 */
function verifyToken (req, res, next) {
    console.log('JWT Middleware Authenticate')
    // Get the auth header value
    const bearerHeader = req.headers['authorization']
    // Check if bearer is undefined
    if (typeof bearerHeader == 'undefined') {
        res.status(401).send({'msg': 'Unauthorized'})
        return
    } else {
        let token = bearerHeader.split(' ')[1]
        req.token = token
    }
    jwt.verify(req.token, process.env.JWT_SECRET, (err, authData) => {
        if (!err) {
            req.user_id = authData.user.id
            next();
        } else {
            res.status(401).send({'msg': 'Unauthorized'})
        }
    })
}

module.exports = verifyToken