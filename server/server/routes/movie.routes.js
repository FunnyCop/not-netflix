const MovieController = require("../controllers/movies.controller")

module.exports = app =>{
    app.get("/api/movies", MovieController.findAllMovies)
}