import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";

import Dashboard from "./components/dashboard/Dashboard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./common/PrivateRoute";
import CreateProfile from "./components/create-profile/CreateProfile";
import { clearCurrentProfile } from "./actions/profileActions";
import Courses from "./components/course/Courses";
import AdminDashboard from "./components/admin/AdminDashboard";
import EditProfile from "./components/edit-profile/EditProfile";
import AddEducation from "./components/add-credentials/AddEducation";
import AddExperience from "./components/add-credentials/AddExperience";
import Profile from "./components/profile/Profile";
import NotFound from "./components/not-found/NotFound";
import Course from "./components/course/courseDetails/Course";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* Header */}
            <Header />

            {/* Content */}
            <Route exact path="/" component={Home} />

            {/* Contact page */}
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/profile/:handle" component={Profile} />
            <div>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>
              {/* Course Links */}
              <Route exact path="/courses" component={Courses} />

              <Switch>
                <Route exact path="/course/:id" component={Course} />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/admin-dashboard"
                  component={AdminDashboard}
                />
              </Switch>
              <Route exact path="/not-found" component={NotFound} />
            </div>
            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
