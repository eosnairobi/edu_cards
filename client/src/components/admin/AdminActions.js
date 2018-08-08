import React from "react";
import { Link } from "react-router-dom";

const AdminActions = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <nav style={{ backgroundColor: "#e6e6e6" }}>
          <ul class="nav nav-justified">
            <li class="active">
              <Link to="/admin-dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/list-courses">Courses</Link>
            </li>
            <li>
              <Link to="/list-lessons">Lessons</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminActions;
