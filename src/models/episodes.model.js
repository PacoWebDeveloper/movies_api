const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const episodes = db.define('episodes', {
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
    seasonId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    episodeNumber: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    duration: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    episodeUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    coverUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = episodes