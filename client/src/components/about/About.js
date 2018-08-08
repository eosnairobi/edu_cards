import React from "react";

const About = () => {
  return (
    <div id="about" class="section">
      {/* <!-- container --> */}
      <div class="container">
        {/* <!-- row --> */}
        <div class="row">
          <div class="col-md-6">
            <div class="section-header">
              <h2>Welcome to Edueos</h2>
              <p class="lead">
                One stop shot to the most powerful infrastructure for
                decentralized applications
              </p>
            </div>

            {/* <!-- feature --> */}
            <div class="feature">
              <i class="feature-icon fa fa-flask" />
              <div class="feature-content">
                <h4>Online Courses </h4>
                <p>
                  Get to learn the most basic to advanced eos content using
                  EOSIO which is a free, open-source blockchain software
                  protocol that provides developers and entrepreneurs with a
                  platform on which to build, deploy and run high-performing
                  decentralized applications (DAPPs)
                </p>
              </div>
            </div>
            {/* <!-- /feature --> */}

            {/* <!-- feature --> */}
            <div class="feature">
              <i class="feature-icon fa fa-users" />
              <div class="feature-content">
                <h4>Expert Teachers</h4>
                <p>Get to learn from the best in the field.</p>
              </div>
            </div>
            {/* <!-- /feature --> */}

            {/* <!-- feature --> */}
            <div class="feature">
              <i class="feature-icon fa fa-comments" />
              <div class="feature-content">
                <h4>Community</h4>
                <p>
                  This is a discussion forum about EOS, a powerful
                  infrastructure for decentralized applications. It was started
                  by Francis (@frabrunelle) & René (@rene) who are both EOS
                  enthusiasts.
                </p>
              </div>
            </div>
            {/* <!-- /feature --> */}
          </div>

          <div class="col-md-6">
            <div class="about-img">
              <img src="./img/about.png" alt="" />
            </div>
          </div>
        </div>
        {/* <!-- row --> */}
      </div>
      {/* <!-- container --> */}
    </div>
  );
};

export default About;
