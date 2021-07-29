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
    app.put("api/profileImage/UserId", UserController.updateUser)
}