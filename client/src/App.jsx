import React from "react"
import { Router } from "@reach/router"

import Home from "./views/Home.jsx"
import Browse from "./views/Browse.jsx"

import CONTENT from "./components/CONTENT.jsx"

import ProfileAdd from "./views/ProfileAdd.jsx"
import ProfileEdit from "./views/ProfileEdit.jsx"
import ProfileImages from "./views/ProfileImages.jsx"
import MyList from "./views/MyList.jsx"

import "./static/css/App.css"

const App = () => {
  return (
    <div id = "App">
      <Router>

        <Home path = "/" />

        <Browse path = "/browse" content = { CONTENT.browseHome() } />
        <Browse path = "/browse/shows" content = { CONTENT.browseShows() } />
        <Browse path = "/browse/movies" content = { CONTENT.browseMovies() } />

        <ProfileAdd path = "/profile/add" />
        <ProfileEdit path = "/profile/edit" />
        <ProfileImages path = "/profile/picture/select" />
        <MyList path = "/mylist" />

      </Router>
    </div>
  )
}

export default App