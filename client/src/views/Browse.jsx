import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import NavBar from "../components/NavBar";
import Featured from "../components/Featured";

import "../static/css/Browse.css"

const Browse = props => {
    const [ user, setUser ] = useState( null )

    useEffect( () => {
        axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
            .then( res => res.data._id ? setUser( res.data._id ) : navigate( "/" ) )
            .catch( () => !user && navigate( "/" ) )
    }, [ user] )

    return (
        <div id =  "Browse">
            <NavBar />
            <Featured />
            <div id = "Content">
                { props.content }
            </div>
        </div>
    )
}

export default Browse