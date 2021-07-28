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

    const logout = () => {
        axios.get( "http://localhost:8000/api/logout", { withCredentials: true } )
            .then( () => navigate( "/" ) )
            .catch( () => navigate( "/" ) )
    }

    return (
        <div id = "CredentialsTest">
            <button onClick = { () => logout() }>Logout</button>
        </div>
    )
}
export default CredentialsTest