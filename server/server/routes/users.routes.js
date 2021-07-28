const UserController = require("../controllers/users.controllers");
const {authenticate} = require("../config/jsonwebtokens");

module.exports = app => {
    // ============
    //  Register
    // ============
    app.post("/api/register", UserController.register)

    // ============
    //  Login
    // ============
    app.post("/api/login", UserController.login)

    app.get( "/api/verify", UserController.verifyUser )
    app.get( "/api/logout", UserController.clearCookies )
}