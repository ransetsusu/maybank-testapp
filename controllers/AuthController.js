const userService = require('../services/UserService')


class AuthController
{
    constructor() {}

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns auth token
     */
    login (req, res) {
        let params = {
            username: req.body.username,
            password: req.body.password,
        }

        userService.isValid(params, (callback) => {
            res.json(callback)
        })
    }

}



module.exports = AuthController