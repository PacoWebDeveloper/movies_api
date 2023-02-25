const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const seasons = db.define('seasons', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    serieId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seasonsNumber: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    releaseYear: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    coverUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = seasons