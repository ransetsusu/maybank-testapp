var db = require('../models')

class GenderTagService
{

    constructor () {
        this.gender_tag_model = db.gender_tags
        this.response = {}
    }

    /**
     *
     * @param {obj} params
     * @param {func} callback
     */
    getGenderTags (params, callback) {
        this.gender_tag_model.findAll({
            attributes: ['id', 'name']
        }).then(gender_tags => {
            this.response.data = gender_tags

            callback(this.response)
        }).catch(err => {
            callback(err)
        })
    }
}


module.exports = new GenderTagService