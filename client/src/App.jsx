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

        <Browse path = "/browse" content = { CONTENT.browseHome() } featured = { true } />
        <Browse path = "/browse/shows" content = { CONTENT.browseShows() } featured = { true } />
        <Browse path = "/browse/movies" content = { CONTENT.browseMovies() } featured = { true }/>

        <Browse path = "/mylist" content = { <MyList /> } featured = { true } />

        <Browse path = "/profile/edit" content = { <ProfileEdit /> } featured = { false } />
        <Browse path = "/profile/picture/select" content = { <ProfileImages /> } featured = { false } />
        <Browse path = "/profile/add" content = { <ProfileAdd /> } featured = { false } />

      </Router>
    </div>
  )
}

export default App