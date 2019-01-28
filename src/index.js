import ReactDOM from "react-dom"
import React from 'react'
import StudentApp from "./components/StudentApp"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
<Router>
    <StudentApp />
</Router>, document.querySelector("#root"));
