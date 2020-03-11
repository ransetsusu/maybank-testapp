var db = require('../models')

class CategoryService
{

    constructor () {
        this.category_model = db.categories
        this.response = {}
    }

    /**
     *
     * @param {obj} params
     * @param {func} callback
     */
    getCategory (params, callback) {
        this.category_model.findAll({
            attributes: ['id', 'name']
        }).then(categories => {
            this.response.data = categories

            callback(this.response)
        }).catch(err => {
            callback(err)
        })
    }
}


module.exports = new CategoryService