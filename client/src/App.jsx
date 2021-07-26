import Home from "./views/Home.jsx"
import { Router } from "@reach/router"

import "./static/css/App.css"

const App = () => {
  return (
    <div id = "App">
      <Router>
        <Home path = "/" />
      </Router>
    </div>
  )
}

export default App