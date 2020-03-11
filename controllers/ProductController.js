const productService = require('../services/ProductService')

class ProductController
{
    constructor() {}

    /**
     *
     * @param {*} req
     * @param {*} res
     * @returns Product object
     */
    get(req, res) {
        productService.getProduct(req.body, (callback) => {
            res.json(callback)
        })
    }

}


module.exports = ProductController
