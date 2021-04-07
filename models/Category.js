'use strict'

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('categories', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING
    }, {
        timestamp: false,
        underscored: true
    })

    Category.associate = (models) => {
        Category.belongsTo(models.sub_categories)
    }

    return Category
}