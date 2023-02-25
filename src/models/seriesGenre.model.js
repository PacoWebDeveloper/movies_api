const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const seriesGenre = db.define('series_genres', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    genreId: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    serieId: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = seriesGenre