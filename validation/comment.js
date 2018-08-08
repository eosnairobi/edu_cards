const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateCommentInput(req) {
  let errors = {};
  const data = req.body;

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  if (!Validator.isLength(data.title, { min: 5, max: 50 })) {
    errors.title = "Title must be between 5 and 15 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (!Validator.isLength(data.description, { min: 10, max: 300 })) {
    errors.description = "Description must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
