const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const movieGenres = db.define('movie_genres', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    genreId: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    movieId: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = movieGenres