const express = require('express')
require('dotenv').config()
const config = require('../config').api
const { host, port } = config
const baseUrl = '/api/v1'
const upload = require('./utils/multer')
const swaggerUi = require('swagger-ui-express')

const swaggerDocument = require('./swagger.json');

const db = require('./utils/database')
const initModels = require('./models/initModels')

const responses = require('./utils/handleResponses')

const userRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')
const moviesRouter = require('./movies/movies.router')
const genresRouter = require('./genres/genres.router')

const app = express()

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Connection with database was stablished successfully')
    })
    .catch(err => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('Database synced successfully')
    })
    .catch(err => {
        console.log(err)
    })

initModels()

app.get('/', (req, res) => {
    responses.success({
        res,
        status: 200,
        message: `Welcome to movies API created by Francisco Ortiz, please go to this route to see available end points: ${host}:${port}/api/v1/api-docs`
    })
})

//? Ruta de ejemplo para subir imagenes
app.post('/upload-file', upload.fields([
    {name: 'coverImage', maxCount: 1}, 
    {name: 'movieVideo', maxCount: 1}
]), (req, res) => {
    const file = req.files
    res.status(200).json({file})
})

app.use(baseUrl, userRouter)
app.use(baseUrl, authRouter)
app.use(baseUrl, moviesRouter)
app.use(baseUrl, genresRouter)

app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('*', (req, res) => {
    responses.error({
        res,
        status: 404,
        message: `URL no for found, please try with ${host}:${port}${baseUrl}`
    })
})

app.listen(port, () => {
    console.log(`Server running on: ${host}:${port}`)
})