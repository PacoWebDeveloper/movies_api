const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const user = db.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    profileImage: {
        type: DataTypes.STRING
    },
    role: {
        type: DataTypes.STRING,
        default: 'user'
    },
    status: {
        type: DataTypes.STRING,
        default: 'Active'
    }
})

module.exports = user