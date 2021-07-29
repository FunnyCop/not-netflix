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

    // ============
    //  Verify
    // ============
    app.get( "/api/verify", UserController.verifyUser )

    // ============
    //  Logout
    // ============
    app.get( "/api/logout", UserController.clearCookies )

    // ============
    //  Update
    // ============
    app.put("api/users/:userId", UserController.updateUser)

    // ============
    //  Get All Users
    // ============
    app.get("/api/all", UserController.findAllUsers)

    // ============
    //  Get Logged In User
    // ============
    app.get("/api/users/loggedin", authenticate, UserController.getLoggedInUser)
    // ============
    //  Get One User
    // ============
    app.get("/api/users/:id", UserController.findAllUsers)
}