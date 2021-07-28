import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const CredentialsTest = () => {
    const [ user, setUser ] = useState( null )

    useEffect( () => {
        axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
            .then( res => res.data._id ? setUser( res.data._id ) : navigate( "/" ) )
            .catch( () => navigate( "/" ) )
    }, [] )

    return (
        <div id = "CredentialsTest"></div>
    )
}
export default CredentialsTest