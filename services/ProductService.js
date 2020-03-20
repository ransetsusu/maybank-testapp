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
            include: [
                {
                    model: db.sub_categories,
                    attributes: ['name'],
                    required: true,
                    include: [
                        {
                            model: db.categories,
                            attributes: ['name'],
                            required: true
                        }
                    ]
                },
                {
                    model: db.merchants,
                    attributes: ['name'],
                    required:true
                },
                {
                    model: db.gender_tags,
                    attributes: ['name'],
                    required:true
                }
            ],
            attributes: ['id', 'title', 'url', 'images', 'description', 'available',
                'created_at', 'updated_at'
            ]
        }).then(products => {
            this.response.data = products
            callback(this.response)
        }).catch(err =>{
            console.log('error', err)
            callback(err)
        })
    }

    async createProduct(params) {
        let new_item = await this.product_model.build(params).save()

        return new_item._options.isNewRecord

    }

    async updateProduct(updateObject, product_id) {
        let response = {}

        let existing_item = await this.product_model.findOne({
            where: { id: product_id }
        })

        try {
            if (existing_item.hasOwnProperty('dataValues')) {
                Object.keys(updateObject).forEach(key => {
                    existing_item[key] = updateObject[key]
                })
                await existing_item.save()
                response.msg = 'Success'
                response.status = 1
            }
        } catch (err) {
            response.msg = 'Update failed',
            response.status = 0
        }

        return response
    }

    /**
     *
     * @param {int|string} product_id
     */
    async deleteProduct(product_id) {
        return await this.product_model.destroy({
            where: {id: product_id}
        })
    }


}

module.exports = new ProductService
