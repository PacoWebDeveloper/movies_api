const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const movies = db.define('movies', {
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
        type: DataTypes.DATE,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    trailerUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coverUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    movieUrl: {
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

module.exports = movies