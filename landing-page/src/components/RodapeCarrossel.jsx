import React from "react";
import "./RodapeCarrossel.css";

const RodapeCarrossel = ({ totalSteps, activeIndex }) => {
  const activeStep = activeIndex % totalSteps; 

  return (
    <div className="progress-indicator">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`step ${index === activeStep ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default RodapeCarrossel;
