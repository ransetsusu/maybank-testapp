'use strict'


module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        url: DataTypes.STRING,
        images: DataTypes.TEXT,
        sub_category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        merchant_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gender_tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: DataTypes.STRING,
        available: DataTypes.STRING,
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, {
        timestamp: false,
        underscored: true
    })

    Product.associate = (models) => {
        Product.belongsTo(models.sub_categories)
        Product.belongsTo(models.merchants)
        Product.belongsTo(models.gender_tags)
    }

    return Product
}