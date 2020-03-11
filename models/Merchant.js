'use strict'

module.exports = (sequelize, DataTypes) => {
    const Merchant = sequelize.define('merchants', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
        updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    }, {
        timestamp: false,
        underscored: true
    })

    return Merchant
}