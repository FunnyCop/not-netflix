import React, { useState } from 'react'


const NavBar = () => {

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <img className="logo" src={"/notnetflix.png"}></img>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a id="navLinks" className="nav-link active" aria-current="page" href="/browse">Home</a>
                            </li>
                            <li className="nav-item">
                                <a id="navLinks" className="nav-link" href="#">TV Shows</a>
                            </li>
                            <li className="nav-item">
                                <a id="navLinks" className="nav-link" href="#" tabindex="-1" aria-disabled="true">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a id="navLinks" className="nav-link" href="#" tabindex="-1" aria-disabled="true">New & Popular</a>
                            </li>
                            <li className="nav-item">
                                <a id="navLinks" className="nav-link" href="/mylist" tabindex="-1" aria-disabled="true">My List</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}


export default NavBar