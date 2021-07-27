import React from "react"
import { Router } from "@reach/router"

import Home from "./views/Home.jsx"
import Browse from "./views/Browse.jsx"

// import LoginForm from "./components/LoginForm.jsx";
// import RegistrationForm from "./components/RegistrationForm.jsx";
// import AddProfile from "./views/AddProfile"
// import EditProfile from "./views/EditProfile"

import "./static/css/App.css"

const App = () => {
  return (
    <div id = "App">
      <Router>
        <Home path = "/" />
        <Browse path = "/browse" />

        {/* <LoginForm path = "/login" />
        <RegistrationForm path = "/register" />
        <AddProfile path = "/profile/add" />
        <EditProfile path = "/profile/edit" /> */}

      </Router>
    </div>
  )
}

export default App