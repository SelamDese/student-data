import React, { Component } from "react";

export default class StudentList extends Component {
  render() {
    return (
      <section className="students">
        {this.props.students.map(student => (
          <div key={student.id}>
               <p> {student.firstName} {student.lastName}</p>
          </div>
        ))}
      </section>
    );
  }
}