import React, { useState } from "react"
import { navigate } from "@reach/router"
import axios from "axios"

const RegistrationForm = () => {
    const [ form, setForm ] = useState ( { username: "", email: "", phone: "", password: "", confirm: "" } )
    const [ errors, setErrors ] = useState( {} )

    const onChangeHandler = event =>
        setForm( { ...form, [ event.target.name ]: event.target.value } )

    const onSubmitHandler = event => {
        event.preventDefault()

        axios.post( "http://localhost:8000/api/register", form, { withCredentials: true } )

            .then( res =>
                res.data.errors
                    ? setErrors( res.data.errors )
                    : navigate( "/browse" )
            )

            .catch( err => console.log( err ) )
    }

    return (
            <form id = "RegistrationForm" onSubmit = { onSubmitHandler } className = "form-group">

                <h1>Register</h1>

                <span>
                    <label>Username</label>
                    <input onChange = { onChangeHandler } type = "text" name = "username" className = "form-control" />
                </span>

                { errors.username && <p className = "text-danger">{ errors.username.message }</p> }

                <span>
                    <label>Email</label>
                    <input onChange = { onChangeHandler } type = "text" name = "email" className = "form-control" />
                </span>

                { errors.email && <p className = "text-danger">{ errors.email.message }</p> }

                <span>
                    <label>Phone Number</label>
                    <input onChange={onChangeHandler} type="text" name="phone" className = "form-control" />
                </span>

                { errors.phone && <p className = "text-danger">{ errors.phone.message }</p> }

                <span>
                    <label>Password</label>
                    <input onChange = { onChangeHandler } type = "password" name = "password" className = "form-control" />
                </span>

                { errors.password && <p className = "text-danger">{ errors.password.message }</p> }

                <span>
                    <label>Confirm Password</label>
                    <input onChange = { onChangeHandler } type = "password"  name = "confirm" className = "form-control" />
                </span>

                { errors.confirm && <p className = "text-danger">{ errors.confirm.message }</p> }

                <input type = "submit" value = "Register!" className = "btn btn-primary" />

            </form>
    )
}

export default RegistrationForm