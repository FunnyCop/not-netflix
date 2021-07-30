import React from "react"
import Row from "./Row.js"

const genres = [
    "Action",
    "Adventure",
    "Biography",
    "Comedy",
    "Crime",
    "Drama",
    "Exciting",
    "Family",
    "Historic",
    "Horror",
    "Mystery",
    "Quirky",
    "Romance",
    "Social",
    "Violent"
]

const CONTENT = {
    browseHome: () => {
        const rows = []

        genres.map( item => rows.push(
            <Row title = { item } type = "" />
        ) )

        return rows
    },

    browseShows: () => {
        const rows = []

        genres.map( item => rows.push(
            <Row title = { item } type = "Show" />
        ) )

        return rows
    },

    browseMovies: () => {
        const rows = []

        genres.map( item => rows.push(
            <Row title = { item } type = "Movie" />
        ) )

        return rows
    }
}

export default CONTENT