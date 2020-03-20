const productService = require('../services/ProductService')


const CREATE_STATUS_CODE = 201
const BAD_REQUEST_CODE = 400

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

    create(req, res) {
        let productObject = {...req.body}
        let status_code = CREATE_STATUS_CODE

        // for (let key in req.body) {
        //     productObject[key] = req.body[key]
        // }

        productService
            .createProduct(productObject)
            .then(data => {
                if (!data) {
                    status_code = BAD_REQUEST_CODE
                }
                res.status(status_code).json(data)

            })
            .catch(err => {
                res.send(err)
            })
    }

    update (req, res) {
        let updateParams = {...req.body}

        productService
            .updateProduct(updateParams, req.params.product_id)
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.send(err)
            })
    }

    delete (req, res) {
        productService
            .deleteProduct(req.params.product_id)
            .then(data => {
                res.send(true)
            })
            .catch(err => {
                res.send(err)
            })
    }

}


module.exports = ProductController
