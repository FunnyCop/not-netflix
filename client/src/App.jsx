import Home from "./views/Home.jsx"
import { Router } from "@reach/router"

import "./static/css/App.css"

import LoginForm from "./components/LoginForm.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";

const App = () => {
  return (
    <div id = "App">
      <Router>
        <Home path = "/" />
        <LoginForm path = "/login" />
        <RegistrationForm path = "/register" />
      </Router>
    </div>
  )
}

export default App