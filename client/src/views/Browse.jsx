import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"
import NavBar from "../components/NavBar";
import Featured from "../components/Featured";

// This is just here to test cookie validation
// Replace this with the actual page that should be displayed

const Browse = () => {
    const [ user, setUser ] = useState( null )

    useEffect( () => {
        axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
            .then( res => res.data._id ? setUser( res.data._id ) : navigate( "/" ) )
            .catch( () => navigate( "/" ) )
    }, [] )

    return (
        <div id =  "Browse">
            <NavBar />
            <Featured />
            Validation Successful
            </div>
    )
}

export default Browse