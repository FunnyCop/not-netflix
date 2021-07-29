import React from "react"
import Row from "./Row.js"

const CONTENT = {
    browseHome: <Row title = "Action" type = "" />,

    browseShows: <>
        <Row title = "Action" type = "Show" />
        <Row title = "Adventure" type = "Show" />
        <Row title = "Horror" type = "Show" />
        <Row title = "Quirky" type = "Show" />
    </>,

    browseMovies: <>
        <Row title = "Action" type = "Movie" />
        <Row title = "Adventure" type = "Movie" />
        <Row title = "Horror" type = "Movie" />
        <Row title = "Quirky" type = "Movie" />
    </>
}

export default CONTENT