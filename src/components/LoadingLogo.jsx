import React from "react";
import './LoadingLogo.css';
const LoadingLogo = () => {
  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="loader"></div>
        </div>
        <div className="load-text">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingLogo;
