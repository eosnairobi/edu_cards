import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../../../common/TextAreaFieldGroup";
import { addComment } from "../../../actions/courseActions";
import TextFieldGroup from "../../../common/TextFieldGroup";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    const { courseId } = this.props;

    const newComment = {
      title: this.state.title,
      description: this.state.description,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addComment(courseId, newComment);
    this.setState({ title: "", description: "" });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <div class="blog-reply-form">
        <h3>Leave Comment</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <TextFieldGroup
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              error={errors.title}
              info="Comment Title"
            />
          </div>
          <div className="form-group">
            <TextAreaFieldGroup
              placeholder="Enter your Comment"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              error={errors.description}
            />
          </div>
          <button type="submit" className="main-button icon-button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  courseId: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addComment }
)(CommentForm);
