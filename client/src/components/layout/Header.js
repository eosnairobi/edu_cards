import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";

import EosNairobi_white from "./../../images/logowhite_transparent_EOSNAirobi.png";

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault();

    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const adminlinks = (
      <li>
        <Link to="/admin-dashboard">Admin Dashboard</Link>
      </li>
    );

    const authLinks = (
      <li class="dropdown">
        <a
          href="#"
          class="dropdown-toggle"
          data-toggle="dropdown"
          role="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            className="rounded-circle"
            src={user.avatar}
            alt={user.name}
            style={{ width: "25px", marginRight: "5px" }}
            title="You must have a Gravatar connected to your email to display an image"
          />{" "}
          <span class="caret" />
        </a>
        <ul class="dropdown-menu" style={{ backgroundColor: "#595971" }}>
          <li>
            <Link to="#">Profile</Link>
          </li>
          {user.role === "admin" ? adminlinks : ""}

          <li role="separator" class="divider" />
          <li>
            <Link to="" onClick={this.onLogoutClick.bind(this)}>
              Logout
            </Link>
          </li>
        </ul>
      </li>
    );
    const guestLinks = (
      <li>
        <Link
          to="/login"
          className="btn btn-default main-button"
          role="button"
          style={{
            position: "relative",
            display: "inline-block",
            padding: "10px 20px ",
            backgroundColor: "#FF6700",
            border: "2px solid transparent",
            borderRadius: "2px",
            color: " #FFF",
            marginTop: " 2px"
          }}
        >
          Login
        </Link>
      </li>
    );

    return (
      <header id="header" className="transparent-nav">
        <div className="container">
          <div className="navbar-header">
            {/* <!-- Logo --> */}
            <div className="navbar-brand">
              <Link className="logo" to="/" style={{ marginTop: 0 }}>
                <img
                  src={EosNairobi_white}
                  alt="logo"
                  style={{ maxHeight: "5rem" }}
                />
              </Link>
            </div>
            {/* <!-- /Logo --> */}

            {/* <!-- Mobile toggle --> */}
            <button className="navbar-toggle">
              <span />
            </button>
            {/* <!-- /Mobile toggle --> */}
          </div>

          {/* <!-- Navigation --> */}
          <nav id="nav">
            <ul className="main-menu nav navbar-nav navbar-right">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="/courses">Catalog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              {isAuthenticated ? authLinks : guestLinks}
            </ul>
          </nav>
          {/* <!-- /Navigation --> */}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { clearCurrentProfile, logoutUser }
)(Header);
