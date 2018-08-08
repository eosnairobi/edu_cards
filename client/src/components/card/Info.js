import React from "react";
import Hero from "../../common/Hero";
import "./Card.css";

const Info = ({ nextStep }) => {
  return (
    <div>
      <Hero />
      <div id="courses" class="section">
        {/* <!-- container --> */}
        <div class="container">
          {/* <!-- row --> */}
          <div class="row">
            <div class="section-header text-center">
              <h2>Explore Courses</h2>
              <p class="lead">Small hard to get anywhere else courses</p>
            </div>
            <div class="container-fluid">
              <br />
              <br />
              <ul class="list-unstyled multi-steps">
                <li class="is-active">Start</li>
                <li>Initial Step</li>
                <li>Middle Stage</li>
                <li>Finish</li>
              </ul>
            </div>
          </div>
          {/* <!-- /row --> */}

          {/* <!-- courses --> */}
          <div id="courses-wrapper">
            {/* <!-- row --> */}
            <div class="row  justify-content-md-center">
              {/* <!-- single course --> */}
              <div class="col">
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
            </div>
          </div>
          {/* <!-- /courses --> */}
        </div>
        {/* <!-- container --> */}
      </div>

      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Info;
