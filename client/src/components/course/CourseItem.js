import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";

import { deleteCourse, addLike, removeLike } from "../../actions/courseActions";

class CourseItem extends Component {
  onDeleteClick(id) {
    this.props.deleteCourse(id);
  }

  onLikeClick(id) {
    this.props.addLike(id);
  }

  onUnlikeClick(id) {
    this.props.removeLike(id);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { course, auth, showActions } = this.props;

    return (
      <div class="col-md-6">
        <div class="single-blog">
          <div class="blog-img">
            <Link to={`/course/${course._id}`}>
              <img src={course.courseImage} alt="" />
            </Link>
          </div>
          <h4>
            <Link to="/course/id">{course.title}</Link>
          </h4>
          <div class="blog-meta">
            <span class="blog-meta-author">
              By: <a href="#">John Doe</a>
            </span>
            <div class="pull-right">
              <span>18 Oct, 2017</span>
              <span class="blog-meta-comments">
                {showActions ? (
                  <a href="#">
                    <i class="fa fa-thumbs-o-up" />
                    {course.likes.length}
                    <span>
                      <i class="fa fa-comments" /> {course.comments.length}
                    </span>
                  </a>
                ) : null}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CourseItem.defaultProps = {
  showActions: true
};

CourseItem.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteCourse, addLike, removeLike }
)(CourseItem);
