import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./ProgressBar.css";

const ProgressBar = ({ total, title }) => {
  let li;
  for (var i of total) {
    return <li className={classnames("", { "is-active": title })}>{title}</li>;
  }
  return (
    <div className="container-fluid">
      <br />
      <br />
      <ul className="list-unstyled multi-steps">
        <li className={classnames("", { "is-active": title })}>{title}</li>
      </ul>
    </div>
  );
};

ProgressBar.propTypes = {
  title: PropTypes.string.isRequired
};

ProgressBar.defaultProps = {
  title: "1"
};

export default ProgressBar;
