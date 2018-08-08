import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Info from "./Info";
import FlashCard from "./FlashCard";
import Success from "./Success";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      toCourses: false
    };

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.refresh = this.refresh.bind(this);
    this.end = this.end.bind(this);
  }

  nextStep() {
    this.setState({
      step: this.state.step + 1
    });
  }

  previousStep() {
    this.setState({
      step: this.state.step - 1
    });
  }

  refresh() {
    this.setState({
      step: this.state.step * 0 + 1
    });
  }

  end() {
    this.setState({
      toCourses: true
    });

    console.log("End");
  }

  render() {
    if (this.state.toCourses === true) {
      return <Redirect to="/courses" />;
    }

    switch (this.state.step) {
      case 1:
        return <Info nextStep={this.nextStep} />;
      case 2:
        return (
          <FlashCard
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 3:
        return (
          <Success
            previousStep={this.previousStep}
            refresh={this.refresh}
            end={this.end}
          />
        );
    }
  }
}

export default Card;
