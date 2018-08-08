import React, { Component } from "react";
import Hero from "../../common/Hero";
import AdminActions from "./AdminActions";
import NewCourse from "./Course/NewCourse";

export default class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <Hero title="Admin" desc="Admin Dashboard" />
        <AdminActions />
        <NewCourse />
      </div>
    );
  }
}
