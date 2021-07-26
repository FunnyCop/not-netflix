const MovieController = require("../controllers/movies.controller")

module.exports = app =>{
    app.get("/api/movies", MovieController.findAllMovies)

    app.post("/api/movies/create", MovieController.createMovie)
}