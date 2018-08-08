import axios from "axios";

import {
  GET_COURSES,
  COURSE_LOADING,
  GET_ERRORS,
  ADD_COURSE,
  DELETE_COURSE,
  GET_COURSE,
  CLEAR_ERRORS
} from "./types";

// Profile loading
export const setCourseLoading = () => {
  return {
    type: COURSE_LOADING
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

// Get All Courses
export const getAllCourses = () => dispatch => {
  dispatch(setCourseLoading());
  axios
    .get("/api/card")
    .then(res =>
      dispatch({
        type: GET_COURSES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COURSES,
        payload: {}
      })
    );
};

// Add Course
export const addCourse = courseData => dispatch => {
  dispatch(clearErrors());
  axios
    .post("/api/card", courseData)
    .then(res =>
      dispatch({
        type: ADD_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Course
export const getCourse = id => dispatch => {
  dispatch(setCourseLoading());
  axios
    .get(`/api/card/${id}`)
    .then(res =>
      dispatch({
        type: GET_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_COURSE,
        payload: null
      })
    );
};

// Delete Course
export const deleteCourse = id => dispatch => {
  axios
    .delete(`/api/card/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_COURSE,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Like
export const addLike = id => dispatch => {
  axios
    .post(`/api/Card/like/${id}`)
    .then(res => dispatch(getAllCourses()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(`/api/card/unlike/${id}`)
    .then(res => dispatch(getAllCourses()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Comment
export const addComment = (courseId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/card/comment/${courseId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Comment
export const deleteComment = (courseId, commentId) => dispatch => {
  axios
    .delete(`/api/card/comment/${courseId}/${commentId}`)
    .then(res =>
      dispatch({
        type: GET_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
