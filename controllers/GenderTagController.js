const genderTagService = require('../services/GenderTagService')


class GenderTagController
{
    constructor() {}

    /**
     *
     * @param {obj} req
     * @param {func} res
     * @returns category obj
     */
    get (req, res) {
        genderTagService.getGenderTags(req.body, (callback) => {
            res.json(callback)
        })
    }

}


module.exports = GenderTagController
