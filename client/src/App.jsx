import React from "react"
import { Router } from "@reach/router"

import Home from "./views/Home.jsx"
import Browse from "./views/Browse.jsx"
import CredentialsTest from "./components/CredentialsTest.jsx"

import ProfileAdd from "./views/ProfileAdd"
import ProfileEdit from "./views/ProfileEdit"
import ProfileImages from "./views/ProfileImages"
// import LoginForm from "./components/LoginForm.jsx";
// import RegistrationForm from "./components/RegistrationForm.jsx";

import "./static/css/App.css"

const App = () => {
  return (
    <div id="App">
      <Router>
<<<<<<< HEAD
        <Home path = "/" />
        <Browse path = "/browse" />
        <CredentialsTest path = "/test" />
=======
        <Home path="/" />
        <Browse path="/browse" />
        <ProfileAdd path="/profile/add" />
        <ProfileEdit path="/profile/edit" />
        <ProfileImages path="/profile/picture/select" />
>>>>>>> ed17eab3d91c8d07dee711595af239a738db3f11

        {/* <LoginForm path = "/login" />
        <RegistrationForm path = "/register" /> */}

      </Router>
    </div>
  )
}

export default App