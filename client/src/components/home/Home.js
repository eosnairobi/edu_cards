import React, { Component } from "react";
import Hero_Area from "./Hero_Area";
import About from "../about/About";
import PreviewCourse from "../courses/PreviewCourse";
import ContactUs from "../contact/ContactUs";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero_Area />
        <About />
        <PreviewCourse />
        <ContactUs />
      </div>
    );
  }
}

export default Home;
