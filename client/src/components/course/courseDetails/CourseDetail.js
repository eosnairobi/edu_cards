import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { addLike, removeLike } from "../../../actions/courseActions";
import FlashCard from "../../card/FlashCard";

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { showActions: true };
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
    const { course, auth } = this.props;
    const { showActions } = this.state;

    return (
      <div>
        <div class="blog-post">
          <FlashCard />
          <p style={{ fontSize: "3rem" }}>{course.title}</p>
          <blockquote>
            <p>{course.description}</p>
          </blockquote>
          <p>
            Published on:{" "}
            <Moment format="YYYY-MMM-Do HH:mm">{course.date}</Moment>
          </p>
        </div>
        {showActions ? (
          <div>
            <button
              onClick={this.onLikeClick.bind(this, course._id)}
              type="button"
              className="btn btn-light mr-1"
            >
              <i
                className={classnames("fa fa-thumbs-up", {
                  "text-info": this.findUserLike(course.likes)
                })}
              />
              <span className="badge badge-light">{course.likes.length}</span>
            </button>
            <button
              onClick={this.onUnlikeClick.bind(this, course._id)}
              type="button"
              className="btn btn-light mr-1"
            >
              <i className="text-secondary fas fa-thumbs-down" />
            </button>
          </div>
        ) : null}
        {/* <!-- /blog post --> */}

        {/* <!-- blog share --> */}
        <div class="blog-share">
          <h4>Share This Course:</h4>
          <a href="#" class="facebook">
            <i class="fa fa-facebook" />
          </a>
          <a href="#" class="twitter">
            <i class="fa fa-twitter" />
          </a>
          <a href="#" class="google-plus">
            <i class="fa fa-google-plus" />
          </a>
        </div>
      </div>
    );
  }
}

CourseDetail.defaultProps = {
  showActions: true
};

CourseDetail.propTypes = {
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
  { addLike, removeLike }
)(CourseDetail);
