import React, { Component } from "react";
import PropTypes from "prop-types";

import CourseItem from "./CourseItem";

class CourseFeed extends Component {
  render() {
    const { courses } = this.props;

    return courses.map(course => (
      <CourseItem key={course.id} course={course} />
    ));
  }
}

CourseFeed.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseFeed;
