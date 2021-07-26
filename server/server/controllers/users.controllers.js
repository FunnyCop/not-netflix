const User = require("../models/user.models")
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
}

module.exports = new UserController();