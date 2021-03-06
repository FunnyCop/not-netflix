import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link, navigate } from "@reach/router"

const NavBar = () => {
    const [user, setUser] = useState({});

    const logout = () => {
        axios.get("http://localhost:8000/api/logout", { withCredentials: true })
            .then(() => navigate("/"))
            .catch(() => navigate("/"))
    }

    return (
        <nav id="NavBar" className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
                <img className="logo" src={"/notnetflix.png"} alt="logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul id="popOut" className="navbar-nav ml-auto mb-2 mb-lg-0 float-end text-end">
                        <li className="nav-item">
                            <a id="navLinks" className="nav-link active" aria-current="page" href="/browse">Home</a>
                        </li>
                        <li className="nav-item">
                            <a id="navLinks" className="nav-link" href="/browse/shows">TV Shows</a>
                        </li>
                        <li className="nav-item">
                            <a id="navLinks" className="nav-link" href="/browse/movies" aria-disabled="true">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a id="navLinks" className="nav-link" href="/browse" aria-disabled="true">New & Popular</a>
                        </li>
                        <li className="nav-item">
                            <a id="navLinks" className="nav-link" href="/mylist" aria-disabled="true">My List</a>
                        </li>
                        <li className="nav-item">
                            <a id="navLinks" className="nav-link" href="/profile/edit" aria-disabled="true">Profile Settings</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={logout} id="navLinks" className="nav-link" href="/" aria-disabled="true">Log Out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default NavBar