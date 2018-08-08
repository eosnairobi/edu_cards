import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";

const Hero = ({ title, desc }) => {
  return (
    <div className="hero-area section">
      {/* <!-- Backgound Image --> */}
      <div
        className="bg-image bg-parallax overlay"
        style={{ backgroundImage: "url(./img/page-background.jpg)" }}
      />
      {/* <!-- /Backgound Image --> */}

      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 text-center">
            <ul className="hero-area-tree">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{title}</li>
            </ul>
            <h1 className="white-text">{desc}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propType = {
  title: PropType.string.isRequired,
  desc: PropType.string.isRequired
};

export default Hero;
