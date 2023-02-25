const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const series = db.define('series', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clasification: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

module.exports = series