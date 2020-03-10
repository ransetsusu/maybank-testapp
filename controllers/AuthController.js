const USER = require('../services/UserService')


class AuthController
{
    constructor() {
        this.user = null
    }

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

        USER.isValid(params, (callback) => {
            res.json(callback)
        })
    }

}



module.exports = AuthController