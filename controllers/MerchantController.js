const merchantService = require('../services/MerchantService')


class MerchantController
{
    constructor() {}

    /**
     *
     * @param {obj} req
     * @param {func} res
     * @returns category obj
     */
    get (req, res) {
        merchantService.getMerchants(req.body, (callback) => {
            res.json(callback)
        })
    }

}


module.exports = MerchantController
