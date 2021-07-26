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

module.exports.createMovie = (req,res)=>{
    Movie.create(req.body)
        .then(newMovie=>{
            res.json({results: newMovie})
        })
        .catch(err => {
            res.json(
                {message: "something went wrong creating a new movie", error: err}
                )
        })
}