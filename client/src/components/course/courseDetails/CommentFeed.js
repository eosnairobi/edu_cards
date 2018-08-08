import React, { Component } from "react";
import PropTypes from "prop-types";

import CommentItem from "./CommentItem";

class CommentFeed extends Component {
  render() {
    const { comments, courseId } = this.props;

    return comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} courseId={courseId} />
    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  courseId: PropTypes.string.isRequired
};

export default CommentFeed;
