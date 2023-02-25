const express = require('express')
require('dotenv').config()
const config = require('../config').api
const { host, port } = config

const responses = require('./utils/handleResponses')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    responses.success({
        res,
        status: 200,
        message: 'Welcome to movies API created by Francisco Ortiz'
    })
})

app.use('*', (req, res) => {
    responses.error({
        res,
        status: 404,
        message: `URL no for found, please try with ${config.host}`
    })
})

app.listen(port, () => {
    console.log(`Server running on: ${host}:${port}`)
})