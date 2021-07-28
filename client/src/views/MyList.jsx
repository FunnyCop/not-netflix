import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import NavBar from "../components/NavBar";

import "../static/css/MyList.css"

const MyList = () => {

    return (
        <div>
            <NavBar />
        <div id="MyList">
            <div className="contentWrapper">
                <div className="content"></div>
            </div>
        </div>
        </div>
    )
}

export default MyList