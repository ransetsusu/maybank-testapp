var db = require('../models')

class MerchantService
{

    constructor () {
        this.merchant_model = db.merchants
        this.response = {}
    }

    /**
     *
     * @param {obj} params
     * @param {func} callback
     */
    getMerchants (params, callback) {
        this.merchant_model.findAll({
            attributes: ['id', 'name']
        }).then(merchants => {
            this.response.data = merchants

            callback(this.response)
        }).catch(err => {
            callback(err)
        })
    }
}


module.exports = new MerchantService