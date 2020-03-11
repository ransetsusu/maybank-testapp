var db = require('../models')


class ProductService
{
    constructor() {
        this.product_model = db.products
        this.response = {}
    }

    /**
     *
     * @param {obj} params
     * @param {func} callback
     * @description  retrieve all products base on params
     */
    getProduct (params, callback) {
        this.product_model.findAll({
            attributes: ['id', 'title', 'url', 'images', 'description', 'available',
                'created_at', 'updated_at'
            ]
        }).then(products => {
            this.response.data = products
            callback(this.response)
        }).catch(err =>{
            callback(err)
        })
    }



}

module.exports = new ProductService