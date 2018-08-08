import React, { Component } from "react";
import { Link } from "react-router-dom";

class Hero_Area extends Component {
  render() {
    return (
      <div id="home" class="hero-area" style={{ height: "100vh" }}>
        {/* <!-- Backgound Image --> */}
        <div
          class="bg-image bg-parallax overlay"
          style={{
            backgroundImage: "url(./img/home-background.png)",
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        />
        {/* <!-- /Backgound Image --> */}

        <div class="home-wrapper">
          <div class="container">
            <div class="row col-md-offset-3 text-center">
              <div class="col-md-8">
                <h1 class="white-text">EduEOS Free Online Training Courses</h1>
                <p class="lead white-text">
                  Learn more with eos blockchain tutorials.
                </p>
                <Link class="main-button icon-button" to="/login">
                  Get Started!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero_Area;
