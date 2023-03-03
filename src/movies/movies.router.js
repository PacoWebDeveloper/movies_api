const router = require('express').Router()

const movieServices = require('./movies.services')
const upload = require('../utils/multer')

router.route('movies')
    .get(movieServices.getAllMovies)
    .post(upload.single('movieVideo') ,movieServices.postMovie)

router.get('movies/genres/:genreId', movieServices.getAllMoviesByGenre)

router.post('movies/:movieId/genres/:genreId', movieServices.postGenreToMovie)

module.exports = router