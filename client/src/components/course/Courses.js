import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Hero from "../../common/Hero";
import AsideMenu from "../layout/Aside-Menu";
import { getAllCourses } from "../../actions/courseActions";
import Spinner from "../../common/Spinner";
import CourseFeed from "./CourseFeed";

class Courses extends Component {
  componentDidMount() {
    this.props.getAllCourses();
  }
  render() {
    const { loading, courses } = this.props.course;
    let courseContent;

    if (courses === null || loading) {
      courseContent = <Spinner />;
    } else {
      courseContent = <CourseFeed courses={courses} />;
    }

    return (
      <div>
        <Hero title="Catalog" desc="Program Catalog" />
        <div id="blog" class="section">
          {/* <!-- container --> */}
          <div class="container">
            {/* <!-- row --> */}
            <div class="row">
              <AsideMenu />
              {/* <!-- main blog --> */}
              <div id="main" class="col-md-9">
                {/* <!-- row --> */}
                <div class="row">{courseContent}</div>
                {/* <!-- row --> */}
                <div class="row">
                  {/* <!-- pagination --> */}
                  <div class="col-md-12">
                    <div class="post-pagination">
                      <a href="#" class="pagination-back pull-left">
                        Back
                      </a>
                      <ul class="pages">
                        <li class="active">1</li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                      </ul>
                      <a href="#" class="pagination-next pull-right">
                        Next
                      </a>
                    </div>
                  </div>
                  {/* <!-- pagination --> */}
                </div>
                {/* <!-- /row --> */}
              </div>
              {/* <!-- /main Course --> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Courses.propTypes = {
  getAllCourses: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getAllCourses }
)(Courses);
