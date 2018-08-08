import {
  GET_COURSES,
  COURSE_LOADING,
  GET_COURSE,
  ADD_COURSE,
  DELETE_COURSE
} from "../actions/types";

const initialState = {
  courses: [],
  course: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COURSE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
        loading: false
      };
    case GET_COURSE:
      return {
        ...state,
        course: action.payload,
        loading: false
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [action.payload, ...state.courses]
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter(course => course._id !== action.payload)
      };
    default:
      return state;
  }
}
