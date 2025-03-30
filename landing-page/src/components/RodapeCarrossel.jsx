import React from "react";
import "./RodapeCarrossel.css";

const RodapeCarrossel = ({ totalSteps, activeStep }) => {
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
