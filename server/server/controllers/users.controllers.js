const User = require("../models/users.models")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {secret} = require("../config/jsonwebtokens");


class UserController {
    register(req, res) {
        const user = new User(req.body)
        user.save()
            .then(() => { 
                res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly: true})
                .json({messge: "Succesfully created a user", user: user})
            })
            .catch(err => res.json(err))
    }

    login(req, res) {
        User.findOne({username: req.body.username})
            .then(user => {
                if(user === null) {
                    res.json({message: "Invalid login attempt"})
                }
                else {
                    bcrypt.compare(req.body.password, user.password)
                        .then(passwordIsValid => {
                            if(passwordIsValid){
                                res.cookie("usertoken", jwt.sign({_id: user._id}, secret), {httpOnly: true})
                                .json({message: "Success!"});
                            }
                            else {
                                res.json({message: "Invalid login attempt!"})
                            }
                        })
                        .catch(err => res.json({message: "Invalid login attempt", err}))
                }
            })
            .catch(err => res.json({message: "Invalid login attempt", err}))
    }

    getLoggedInUser(req, res) {
        const deCodeJWT = jwt.decode(req.cookies.usertoken, {complete: true});
        User.findById(deCodeJWT.payload._id)
            .then(user => res.json(user))
            .catch(err => res.json(err))
    }

    // Verify that a cookie is correctly signed
    // Respond with the document _id if valid
    // Respond with false if not valid
    verifyUser( req, res ) {
        const userID = jwt.verify( req.cookies.usertoken, secret )
        userID ? res.json( userID ) : res.json( false )
    }

    // Clear cookies for logout
    clearCookies( req, res ) {
        res.clearCookie( "usertoken" ).send()
    }

    // Updating a profile image
    updateUser( req, res ) {
        User.findByIdAndUpdate (
            {_id: req.params._id}, 
            req.body,
            {new: true, runValidators: true}
        )
        .then(updatedUser => res.json({results: updatedUser}))
        .catch(err => {
            res.json(
                {message: "something went wrong updating user information", error: err}
                )
        })  
    }

    // Find All Users
    findAllUsers(req, res) {
        User.find()
        .then(allUsers => res.json({results: allUsers}))
        .catch(err => res.json(err))
    }

    // Get One User
    getOneUser(req, res) {
        User.findOne({_id:req.params._id})
            .then(foundUser => res.json({results: foundUser}))
            .catch(err => res.json(err))
    }
}

module.exports = new UserController();