const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const movieGenres = db.define('movieGenres', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    genreId: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    movieId: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

module.exports = movieGenres