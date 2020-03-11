'use strict'

module.exports = (sequelize, DataTypes) => {
    const GenderIdentity = sequelize.define('gender_tags', {
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

    return GenderIdentity
}