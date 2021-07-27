import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const CredentialsTest = () => {
    const [ user, setUser ] = useState( null )

    useEffect( () => {
        axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
            .then( res => !res.data.message && navigate( "/" ) )
            .catch( () => navigate( "/" ) )

        axios.get( "http://localhost:8000/api/user", { withCredentials: true } )
            .then( res => setUser( res.data._id ) )
            .catch( () => navigate( "/" ) )
    }, [] )

    return (
        <div id = "CredentialsTest"></div>
    )
}
export default CredentialsTest