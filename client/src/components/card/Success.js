import React from "react";
import Hero from "../../common/Hero";

const Success = ({ previousStep, refresh, end }) => {
  return (
    <div className="test">
      <Hero />
      <p className="test">Success</p>

      <button onClick={previousStep}>Previous</button>
      <button onClick={refresh}>Start</button>
      <button onClick={end}>Finish</button>
    </div>
  );
};

export default Success;
