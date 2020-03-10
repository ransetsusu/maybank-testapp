var db = require('../models')
const jwt = require('jsonwebtoken');

class UserService
{
    constructor() {
        this.user_model = db.users
        this.response = {}
    }

    isValid (params, callback) {

        this.user_model.findOne({
            where: {username: params.username, password: params.password},
            attributes: ['id', 'username']
        }).then(async user => {
            if (user) {
                let payload = { id: user.id, username: user.username }
                // generate token
                await jwt.sign({ user: payload },
                    process.env.JWT_SECRET,
                    { expiresIn: '1d'},
                    (err, token) => {
                        this.response.token = token;
                    }
                )

                this.response.msg = 'Valid User'
            } else {
                this.response.msg = 'User not found'
            }
            callback(this.response)
        }).catch(error => {
            callback(error)
        })

    }
}

module.exports = new UserService