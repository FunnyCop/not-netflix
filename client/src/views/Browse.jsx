import React, { useEffect } from "react"
import axios from "axios"
import { navigate } from "@reach/router"

// This is just here to test cookie validation
// Replace this with the actual page that should be displayed

const Browse = () => {

    useEffect( () => {
        axios.get( "http://localhost:8000/api/verify", { withCredentials: true } )
            .then( res => !res.data.message && navigate( "/" ) )
            .catch( navigate( "/" ), window.location.reload( true ) )
    }, [] )

    return (
        <div id =  "Browse">Validation Successful</div>
    )
}

export default Browse