import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import AsideMenu from "../../layout/Aside-Menu";
import PreviewCourse from "../../courses/PreviewCourse";
import { getCourse } from "../../../actions/courseActions";
import ContactUs from "../../contact/ContactUs";
import isEmpty from "../../../validation/is-empty";
import Spinner from "../../../common/Spinner";
import CourseDetail from "./CourseDetail";
import CommentFeed from "./CommentFeed";
import CommentForm from "./CommentForm";

class Course extends Component {
  componentDidMount() {
    this.props.getCourse(this.props.match.params.id);
  }

  render() {
    const { course, loading } = this.props.course;
    let courseContent;

    if (isEmpty(course) || loading) {
      courseContent = <Spinner />;
    } else {
      console.log(course);
      courseContent = (
        <div id="main" class="col-md-12">
          <CourseDetail course={course} showActions={false} />
          <div className="row">
            <div class="col-md-8">
              <div class="blog-comments">
                <h3>{course.comments.length} Comments</h3>
                <CommentFeed courseId={course._id} comments={course.comments} />
              </div>
            </div>
            <div class="col-md-4">
              {/* <!-- single comment --> */}
              <CommentForm courseId={course._id} />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {/* <!-- Hero-area --> */}
        <div class="hero-area section">
          {/* <!-- Backgound Image --> */}
          <div
            class="bg-image bg-parallax overlay"
            style={{ backgroundImage: "url(./img/blog-post-background.jpg)" }}
          />
          {/* <!-- /Backgound Image --> */}

          <div class="container">
            <div class="row">
              <div class="col-md-10 col-md-offset-1 text-center">
                <ul class="hero-area-tree">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>How to Get Started in EOS</li>
                </ul>
                <h1 class="white-text">How to Get Started in EOS</h1>
                <ul class="blog-post-meta">
                  <li class="blog-meta-author">
                    By : <a href="#">John Doe</a>
                  </li>
                  <li>18 Oct, 2017</li>
                  <li>
                    <a href="#">
                      <i class="fa fa-heart" /> 35
                    </a>
                  </li>
                  <li class="blog-meta-comments">
                    <a href="#">
                      <i class="fa fa-comments" /> 35
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Hero-area --> */}
        {/* <!-- Blog --> */}
        <div id="blog" class="section">
          {/* <!-- container --> */}
          <div class="container">
            {/* <!-- row --> */}
            <div class="row">{courseContent}</div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- /Blog --> */}
        <PreviewCourse />
        <ContactUs />
      </div>
    );
  }
}

Course.propTypes = {
  getCourse: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourse }
)(Course);
