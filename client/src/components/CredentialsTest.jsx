import React, { useState, useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"

const CredentialsTest = () => {
    const [ user, setUser ] = useState( null )

    useEffect( () => {
        // This only verifies that the cookie is signed by our secret
        axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
            .then( res => !res.data.message && navigate( "/" ) )
            .catch( () => navigate( "/" ) )

        // This returns the user's document's _id
        // I could rewrite this to verify the cookie and respond with the _id
        // Since I'm using jwt.verify() anyway
        axios.get( "http://localhost:8000/api/user", { withCredentials: true } )
            .then( res => setUser( res.data._id ) )
            .catch( () => navigate( "/" ) )
    }, [] )

    return (
        <div id = "CredentialsTest"></div>
    )
}
export default CredentialsTest