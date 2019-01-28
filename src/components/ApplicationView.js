import { Route } from "react-router-dom";
import React, { Component } from "react";
import StudentList from "./student/StudentList";
import StudentManager from "../module/StudentManager";

export default class ApplicationViews extends Component {
    state = {
      students: []
    }

      componentDidMount() {
        StudentManager.getAll()
        .then(allStudents => {
          this.setState({ students: allStudents });
        });
    }

    render() {
        return (
          <React.Fragment>
            <Route exact path="/students"
              render={props => {
                return (<StudentList deleteLocation={this.deleteLocation} students={this.state.students} />);
              }}
            />
          </React.Fragment>
        );
      }
}