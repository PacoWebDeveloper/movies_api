const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const genres = db.define('genres', {
    id: {
        type: DataTypes.SMALLINT,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = genres