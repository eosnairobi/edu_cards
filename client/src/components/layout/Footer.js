import React from "react";

import EosNairobi_black from "./../../images/logoblack_transparent_EOSNAirobi.png";

const Footer = () => {
  return (
    <footer id="footer" class="section">
      {/* <!-- container --> */}
      <div class="container">
        {/* <!-- row --> */}
        <div class="row">
          {/* <!-- footer logo --> */}
          <div class="col-md-6">
            <div class="footer-logo">
              <a class="logo" href="index.html" style={{ marginTop: 0 }}>
                <img
                  src={EosNairobi_black}
                  alt="logo"
                  style={{ maxHeight: "5rem" }}
                />
              </a>
            </div>
          </div>
          {/* <!-- footer logo --> */}

          {/* <!-- footer nav --> */}
          <div class="col-md-6">
            <ul class="footer-nav">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* <!-- /footer nav --> */}
        </div>
        {/* <!-- /row --> */}

        {/* <!-- row --> */}
        <div id="bottom-footer" class="row">
          {/* <!-- social --> */}
          <div class="col-md-4 col-md-push-8">
            <ul class="footer-social">
              <li>
                <a href="#" class="facebook">
                  <i class="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#" class="twitter">
                  <i class="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" class="google-plus">
                  <i class="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#" class="instagram">
                  <i class="fa fa-instagram" />
                </a>
              </li>
              <li>
                <a href="#" class="youtube">
                  <i class="fa fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#" class="linkedin">
                  <i class="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- /social --> */}

          {/* <!-- copyright --> */}
          <div class="col-md-8 col-md-pull-4">
            <div class="footer-copyright">
              <span>
                &copy; Copyright 2018. All Rights Reserved. | Made with{" "}
                <i class="fa fa-heart-o" aria-hidden="true" /> by{" "}
                <a href="https://eosnairobi.io">eosnairobi</a>
              </span>
            </div>
          </div>
          {/* <!-- /copyright --> */}
        </div>
        {/* <!-- row --> */}
      </div>
      {/* <!-- /container --> */}
    </footer>
  );
};

export default Footer;
