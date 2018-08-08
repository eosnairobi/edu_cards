import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../../common/TextFieldGroup";
import Hero from "../../common/Hero";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <section className="">
        <Hero />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="card">
                <article className="card-body">
                  <Link
                    to="/register"
                    className="float-right btn btn-outline-primary"
                  >
                    Sign up
                  </Link>
                  <h4 className="card-title mb-4 mt-1">Sign in</h4>
                  <p>
                    <a
                      href="#"
                      className="btn btn-block btn-twitter btn-primary"
                    >
                      {" "}
                      <i className="fa fa-twitter" /> &nbsp; Login via Twitter
                    </a>
                    <a
                      href="#"
                      className="btn btn-block btn-facebook btn-primary"
                    >
                      {" "}
                      <i className="fa fa-facebook-f" /> &nbsp; Login via
                      facebook
                    </a>
                  </p>
                  <hr />
                  <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      name="email"
                      placeholder="Email address"
                      value={this.state.email}
                      error={errors.email}
                      type="email"
                      onChange={this.onChange}
                      icon="fa fa-envelope"
                    />
                    <TextFieldGroup
                      name="password"
                      placeholder="password"
                      value={this.state.password}
                      error={errors.password}
                      type="password"
                      onChange={this.onChange}
                      icon="fa fa-lock"
                    />
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                    <p className="text-center">
                      Forgot password? <Link to="">Reset Password</Link>{" "}
                    </p>
                  </form>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
