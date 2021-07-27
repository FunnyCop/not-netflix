import React, { useState } from "react"
import { navigate } from "@reach/router"
import axios from "axios"

import RegistrationForm from "./RegistrationForm.jsx"

import "bootstrap/dist/css/bootstrap.min.css"
import "../static/css/LoginForm.css"

const LoginForm = () => {
    const [ form, setForm ] = useState( { username: "", password: "" } )
    const [ errors, setErrors ] = useState( {} )
    const [ token, setToken ] = useState( null )

    const onChangeHandler = event =>
        setForm( { ...form, [ event.target.name ]: event.target.value } )

    const onSubmitHandler = event => {
        event.preventDefault()

        axios.post( "http://localhost:8000/api/login", form, { withCredentials: true } )

            .then( res =>
                res.data.message === "Success!"
                    ? navigate( "/browse" )
                    : setErrors( res.data )
            )

            .catch( err => console.log( err ) )
    }

    return (
        <div id = "LoginForm">
            <form onSubmit = { onSubmitHandler } className = "form-group">

                <h3>Login</h3>

                <span>
                    <label>Username</label>
                    <input onChange = { onChangeHandler } type = "text" name = "username" className = "form-control" />
                </span>

                <span>
                    <label>Password</label>
                    <input onChange = { onChangeHandler } type = "password" name = "password" className = "form-control" />
                </span>

                { errors && <p className = "text-danger">{ errors.message }</p> }

                <input type = "submit" value = "Login!" className = "btn btn-primary" />

            </form>

            <RegistrationForm />
        </div>
    )
}

export default LoginForm