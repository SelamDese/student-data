import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationView from "./ApplicationView"
import "bootstrap/dist/css/bootstrap.min.css"


class StudentApp extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationView />
            </React.Fragment>
        )
    }
}

export default StudentApp