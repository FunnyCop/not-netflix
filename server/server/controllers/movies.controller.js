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
    if (req.body.type === "Show" || req.body.type === "Movie"){
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
    else {
        res.json(
            {message: "Type must be 'Show' or 'Movie' explicitely"}
            )
    }
}

module.exports.findOneMovie = (req, res)=>{
    Movie.findOne({_id:req.params.movieId})
        .then(OneMovie =>{
            res.json({results: OneMovie})
        })
        .catch(err => {
            res.json(
                {message: "something went wrong finding one movie", error: err}
                )
        })
}

module.exports.updateMovie = (req, res)=>{
    Movie.findOneAndUpdate(
        {_id: req.params.movieId},
        req.body,
        {new:true, runValidators:true}
        )
        .then(updatedMovie => res.json({results: updatedMovie}))
        .catch(err => {
            res.json(
                {message: "something went wrong updating one movie", error: err}
                )
        })
}

module.exports.deleteMovie = (req, res)=>{
    Movie.deleteOne({_id: req.params.movieId})
        .then(deletedMovie=> res.json({results: deletedMovie}))
        .catch(err => {
            res.json(
                {message: "something went wrong deleting a movie", error: err}
                )
        })
}