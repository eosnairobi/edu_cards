import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import "./css/Register.css";
import TextFieldGroup from "../../common/TextFieldGroup";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <section className="price-area section-gap whole-wrap">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="menu-content pb-70 col-lg-5">
              <div className="card">
                <article
                  className="card-body mx-auto"
                  style={{ maxWidth: "400px" }}
                >
                  <h4 className="card-title mt-3 text-center">
                    Create Account
                  </h4>
                  <p className="text-center">
                    Get started with your free account
                  </p>
                  <p>
                    <a
                      href=""
                      className="btn btn-block btn-twitter btn-primary"
                    >
                      {" "}
                      <i className="fa fa-twitter" /> &nbsp; Login via Twitter
                    </a>
                    <a
                      href=""
                      className="btn btn-block btn-facebook btn-primary"
                    >
                      {" "}
                      <i className="fa fa-facebook-f" /> &nbsp; Login via
                      facebook
                    </a>
                  </p>
                  <p className="divider-text">
                    <span>OR</span>
                  </p>
                  <form noValidate onSubmit={this.onSubmit}>
                    <TextFieldGroup
                      name="name"
                      placeholder="name"
                      value={this.state.name}
                      error={errors.name}
                      type="text"
                      onChange={this.onChange}
                      icon="fa fa-user"
                    />
                    <TextFieldGroup
                      name="email"
                      placeholder="email"
                      value={this.state.email}
                      error={errors.email}
                      type="email"
                      onChange={this.onChange}
                      icon="fa fa-envelope"
                      info="This site uses Gravatar so if you want a profile image,
                        use a Gravatar email."
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
                    <TextFieldGroup
                      name="password2"
                      placeholder="Confirm password"
                      value={this.state.password2}
                      error={errors.password2}
                      type="password"
                      onChange={this.onChange}
                      icon="fa fa-lock"
                    />
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        {" "}
                        Create Account{" "}
                      </button>
                    </div>
                    <p className="text-center">
                      Have an account? <Link to="/login">Log In</Link>{" "}
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
