import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import TextFieldGroup from "../../../common/TextFieldGroup";
import TextAreaFieldGroup from "../../../common/TextAreaFieldGroup";
import "./NewCourse.css";
import isEmpty from "../../../validation/is-empty";

class NewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      courseImage: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors, courseImage } = this.state;
    let imageLink;
    if (!isEmpty(courseImage)) {
      var reader = new FileReader();
      reader.onload = e => {
        imageLink = (
          <div
            id="imagePreview"
            style={{
              backgroundImage: courseImage
            }}
          />
        );
      };
      reader.readAsDataURL(courseImage);
    } else {
      imageLink = (
        <div
          id="imagePreview"
          style={{
            backgroundImage: "url(http://i.pravatar.cc/500?img=7)"
          }}
        />
      );
    }

    return (
      <div className="CreateProfile">
        <section className="">
          <div className="container">
            <div className="row">
              <div className="menu-content  col-lg-12">
                <div className="title text-center">
                  <h1 className="mb-10">Create Course Category</h1>
                  <p>
                    Let's get some information to make your category more unique
                    <small className="d-block pd-3 text-center">
                      * = required fields
                    </small>
                  </p>

                  <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                      <div className="col-md-6">
                        <TextFieldGroup
                          placeholder="* Category title"
                          name="title"
                          value={this.state.title}
                          onChange={this.onChange}
                          error={errors.title}
                          info="A unique title for your Category URl."
                        />
                      </div>
                      <div className="col-md-6">
                        <TextAreaFieldGroup
                          placeholder="Short Description"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChange}
                          error={errors.description}
                          info="Tell us more about the named category"
                        />
                      </div>
                      <div className="col-md-12">
                        <div class="container">
                          <h1>
                            Course Image Upload
                            <small>with preview</small>
                          </h1>
                          <div class="avatar-upload">
                            <div class="avatar-edit">
                              <input
                                type="file"
                                name="courseImage"
                                value={this.state.courseImage}
                                accept=".png, .jpg, .jpeg"
                                onChange={this.onChange}
                                error={errors.courseImage}
                              />
                              <label for="imageUpload" />
                            </div>
                            <div class="avatar-preview">{imageLink}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

NewCourse.propTypes = {
  course: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {}
)(withRouter(NewCourse));
