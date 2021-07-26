const MovieController = require("../controllers/movies.controller")

module.exports = app =>{
    app.get("/api/movies", MovieController.findAllMovies)

    app.post("/api/movies/create", MovieController.createMovie)

    app.get("/api/movies/:movieId", MovieController.findOneMovie)

    app.put("/api/movies/:movieId", MovieController.updateMovie)
    
    app.delete("/api/movies/:movieId", MovieController.deleteMovie)
}