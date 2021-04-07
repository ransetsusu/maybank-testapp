'use strict'

module.exports = (sequelize, DataTypes) => {
    const SubCategory = sequelize.define('sub_categories', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        category_id: {
            type:DataTypes.INTEGER,
            allowNull:false
        }
    }, {
        timestamp: false,
        underscored: true
    })

    SubCategory.associate = (models) => {
        SubCategory.belongsTo(models.categories)
    }

    return SubCategory
}