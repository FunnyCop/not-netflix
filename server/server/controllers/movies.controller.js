const Movie = require("../models/movie.model")


module.exports.findAllMovies = (req,res) => {
    Movie.find()
    .then(allmovies => {
        res.json({results: allmovies})
    })
    .catch(err => {
        res.json(
            {message: "something went wrong getting all the movies", error: err}
            )
    })
}