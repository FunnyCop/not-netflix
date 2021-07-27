import React, { useState } from 'react';
import {Link, navigate} from "@reach/router";
import axios from 'axios';

import "../static/css/LoginForm.css"

// email, phone, password, username, _confirm

const LoginForm = () => {
    const [form, setForm] = useState({
        email: '', 
        phone: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const onChangeHandler = (event) => {
        console.log("changing the things")
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8000/api/login`, form, {withCredentials: true})
            .then(res => {
                console.log(res)
                if(res.data.message === "Success!") {
                    navigate("/all")  //MAY NEED TO SWITCH IF HOME ISN'T THE LOGGED IN USER SPECIFIC PAGE
                }
                else {
                    setErrors(res.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div id = "LoginForm">Login form</div>

            <div>
                <h1>Login</h1>
                <form onSubmit={onSubmitHandler} className="form-group">
                    {/* {errors? <p className="text-danger">{errors.message}</p> : ""} */}
                    <div>
                        <label>Username</label>
                        <input onChange={onChangeHandler} type="text" name="username" className="form-control"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input onChange={onChangeHandler} type="password" name="password" className="form-control"/>
                    </div>
                    <div className="d-flex">
                        <input type="submit" value="Login!" className="btn btn-primary" />
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm