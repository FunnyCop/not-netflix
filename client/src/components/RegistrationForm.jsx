import React, { useState } from 'react';
import {Link, navigate} from "@reach/router";
import axios from 'axios';


const RegistrationForm = () => {
    const [form, setForm] = useState ({
        username: "",
        email: "",
        phone: "",
        password: "",
        confirm: ""
    })
    
    const [errors, setErrors] = useState({})

    const onChangeHandler = (event) => {
        console.log("changing stuffs")
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8000/api/register`, form, {withCredentials: true})
            .then(res => {
                console.log(res)
                if(res.data.errors) {
                    setErrors(res.data.errors)
                }
                else{
                    navigate("/all")  // MAY NEED TO SWITCH IF HOME ISN'T THE LOGGED IN USER SPECIFIC PAGE
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div>
            <h1>Register</h1>
            <form  onSubmit={onSubmitHandler} className="form-group">
                <div>
                    <label>Username</label>
                    <input onChange={onChangeHandler} type="text" name="username"/>
                </div>
                {errors.username ? <p className="text-danger">{errors.username.message}</p> : ""}
                <div>
                    <label>Email</label>
                    <input onChange={onChangeHandler} type="text" name="email"/>
                </div>
                {errors.email ? <p className="text-danger">{errors.email.message}</p> : ""}
                <div>
                    <label>Phone Number</label>
                    <input onChange={onChangeHandler} type="text" name="phone"/>
                </div>
                {errors.phone ? <p className="text-danger">{errors.phone.message}</p> : ""}
                <div>
                    <label>Password</label>
                    <input onChange={onChangeHandler} type="password" name="password"/>
                </div>
                {errors.password ? <p className="text-danger">{errors.password.message}</p> : ""}
                <div>
                    <label>Confirm Password</label>
                    <input onChange={onChangeHandler} type="password" name="confirm"/>
                </div>
                {errors.confirm ? <p className="text-danger">{errors.confirm.message}</p> : ""}
                <input type="submit" value="Register!" className="btn btn-primary" />
                <Link to="/">Login</Link>
            </form>
        </div>
    )
}

export default RegistrationForm