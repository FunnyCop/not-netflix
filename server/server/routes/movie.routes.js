const MovieController = require("../controllers/movies.controller")

module.exports = app =>{
    app.get("/api/browse", MovieController.findAllEverything)

    app.get("/api/browse/:genreId", MovieController.findGenreOnly)

    app.get("/api/browse/:genreId/:typeId", MovieController.findByTypeByGenre)

    app.post("/api/movies/create", MovieController.createMovie)

    app.get("/api/movies/:movieId", MovieController.findOneMovie)

    app.put("/api/movies/:movieId", MovieController.updateMovie)
    
    app.delete("/api/movies/:movieId", MovieController.deleteMovie)
}