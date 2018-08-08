import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div
      className={classnames("input-group mb-3", {
        "has-error": error
      })}
    >
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon">
            <i className={icon} />
          </span>
          <input
            className="form-control"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
        </div>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
