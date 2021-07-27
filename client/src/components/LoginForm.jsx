import React, { useState } from "react"

import "../static/css/LoginForm.css"

// email, phone, password, username, _confirm

const LoginForm = () => {
    const [form, setForm] = useState({
        email: '', 
        phone: '',
        password: ''
    })

    const [erroes, setErrors] = useState({})

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
        <div id = "LoginForm">Login form</div>
    )
}

export default LoginForm