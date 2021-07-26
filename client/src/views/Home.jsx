import React from "react"

import LoginForm from "../components/LoginForm.jsx"

import "../static/css/Home.css"

const Home = () => {
    return (
        <div id = "Home">
            <header>
                <span><h1>Not</h1><h1>Netflix</h1></span>
            </header>
            <main>
                <LoginForm />
            </main>
        </div>
    )
}

export default Home