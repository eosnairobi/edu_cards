import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";

import { deleteComment } from "../../../actions/courseActions";

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }

  render() {
    const { comment, courseId, auth } = this.props;

    return (
      <div class="media">
        <div class="media-left">
          <img src={comment.avatar} alt="" />
        </div>
        <div class="media-body">
          <h4 class="media-heading">{comment.title}</h4>
          <p>{comment.description}</p>
          <div class="date-reply">
            <span>
              {" "}
              <Moment format="YYYY/MM/DD">{comment.date}</Moment>{" "}
            </span>
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, courseId, comment._id)}
                type="button"
                className="btn btn-danger mr-1"
                style={{ float: "right" }}
              >
                <i className="fa fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  courseId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
