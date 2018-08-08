import React, { Component } from "react";

class Course extends Component {
  render() {
    return (
      <div id="courses" class="section">
        {/* <!-- container --> */}
        <div class="container">
          {/* <!-- row --> */}
          <div class="row">
            <div class="section-header text-center">
              <h2>Explore Courses</h2>
              <p class="lead">Small hard to get anywhere else courses</p>
            </div>
          </div>
          {/* <!-- /row --> */}

          {/* <!-- courses --> */}
          <div id="courses-wrapper">
            {/* <!-- row --> */}
            <div class="row">
              {/* <!-- single course --> */}
              <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="course">
                  <a href="#" class="course-img">
                    <img src="./img/course01.jpg" alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                  <a class="course-title" href="#">
                    Beginner to Pro in Eos: What is EOSIO?
                  </a>
                  <div class="course-details">
                    <span class="course-category">Blockchain</span>
                    <span class="course-price course-free">Free</span>
                  </div>
                </div>
              </div>
              {/* <!-- /single course --> */}

              {/* <!-- single course --> */}
              <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="course">
                  <a href="#" class="course-img">
                    <img src="./img/course02.jpg" alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                  <a class="course-title" href="#">
                    Creating a token on EOSIO{" "}
                  </a>
                  <div class="course-details">
                    <span class="course-category">EOS Deep Dive</span>
                    <span class="course-price course-free">Free</span>
                  </div>
                </div>
              </div>
              {/* <!-- /single course --> */}

              {/* <!-- single course --> */}
              <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="course">
                  <a href="#" class="course-img">
                    <img src="./img/course03.jpg" alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                  <a class="course-title" href="#">
                    The Ultimate course on Creating a Tic-Tac-Toe Smart Contract
                    | From Beginner To Advanced
                  </a>
                  <div class="course-details">
                    <span class="course-category">EOS Smartcontract</span>
                    <span class="course-price course-free">Free</span>
                  </div>
                </div>
              </div>
              {/* <!-- /single course --> */}

              {/* <!-- single course --> */}
              <div class="col-md-3 col-sm-6 col-xs-6">
                <div class="course">
                  <a href="#" class="course-img">
                    <img src="./img/course04.jpg" alt="" />
                    <i class="course-link-icon fa fa-link" />
                  </a>
                  <a class="course-title" href="#">
                    Getting started with smart contracts{" "}
                  </a>
                  <div class="course-details">
                    <span class="course-category">EOS Smartcontract</span>
                    <span class="course-price course-free">Free</span>
                  </div>
                </div>
              </div>
              {/* <!-- /single course --> */}
            </div>
          </div>
          {/* <!-- /courses --> */}

          <div class="row">
            <div class="center-btn">
              <a class="main-button icon-button" href="#">
                More Courses
              </a>
            </div>
          </div>
        </div>
        {/* <!-- container --> */}
      </div>
    );
  }
}

export default Course;
