
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
        res.send('SUCCESS AUTH')
    }

}


module.exports = ProductController
