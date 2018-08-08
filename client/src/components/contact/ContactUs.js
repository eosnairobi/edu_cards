import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div id="contact-cta" class="section">
        {/* <!-- Backgound Image --> */}
        <div
          class="bg-image bg-parallax overlay"
          style={{ backgroundImage: "url(./img/cta2-background.jpg)" }}
        />
        {/* <!-- Backgound Image --> */}

        {/* <!-- container --> */}
        <div class="container">
          {/* <!-- row --> */}
          <div class="row">
            <div class="col-md-8 col-md-offset-2 text-center">
              <h2 class="white-text">Contact Us</h2>
              <p class="lead white-text">
                Want to contribute to a future period/course.
              </p>
              <a class="main-button icon-button" href="#">
                Contact Us Now
              </a>
            </div>
          </div>
          {/* <!-- /row --> */}
        </div>
        {/* <!-- /container --> */}
      </div>
    );
  }
}

export default ContactUs;
