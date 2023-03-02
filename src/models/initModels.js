const movies = require('./movies.model')
const genres = require('./genres.models')
const moviesGenres = require('./movieGenres.model')
const seriesGenres = require ('./seriesGenre.model')
const series = require('./series.model')
const seasons = require('./seasons.model')
const episodes = require('./episodes.model')

const initModels = () => {
    movies.belongsToMany(genres, {through: 'movieGenres'})
    genres.belongsToMany(movies, {through: 'movieGenres'})

    series.belongsToMany(genres, {through: 'seriesGenres'})
    genres.belongsToMany(series, {through: 'seriesGenres'})

    series.hasMany(seasons)
    seasons.belongsTo(series)

    seasons.hasMany(episodes)
    episodes.belongsTo(seasons)
}

module.exports = initModels