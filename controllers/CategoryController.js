const categoryService = require('../services/CategoryService')


class CategoryController
{
    constructor() {}

    /**
     *
     * @param {obj} req
     * @param {func} res
     * @returns category obj
     */
    get (req, res) {
        categoryService.getCategory(req.body, (callback) => {
            res.json(callback)
        })
    }

}


module.exports = CategoryController
