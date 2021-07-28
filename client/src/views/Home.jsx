import React, { useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"

import LoginForm from "../components/LoginForm.jsx"

import logo from "../static/img/notnetflix.png"

import "../static/css/Home.css"

const Home = () => {

    useEffect( () => {
        axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
            .then( res => res.data._id && navigate( "/browse" ) )
            .catch( () => navigate( "/" ) )
    }, [] )

    return (
        <div id = "Home">

            <header>
                <span>
                    <img src = { logo } alt="logo" />
                </span>
            </header>

            <main>
                <LoginForm />
            </main>
        </div>
    )
}

export default Home