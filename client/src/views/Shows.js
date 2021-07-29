import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import NavBar from "../components/NavBar";
import Featured from "../components/Featured";
import Row from '../components/Row'

import "../static/css/Browse.css"

// This is just here to test cookie validation
// Replace this with the actual page that should be displayed

const Browse = () => {
    return (
        <div id="Browse">
            <NavBar />
            <Featured />
            <div className="Content">
                {/* <Row title="Action" type="Movie" NetflixOriginal isLargeRow/> */}
                <Row title="Action" type="Show" />
                <Row title="Comedy" type="Show" />
                <Row title="Horror" type="Show" />
                <Row title="Quirky" type="Show" />
                Validation Successful
            </div>
        </div>
    )
}

export default Browse