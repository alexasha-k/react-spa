import React from "react";

import "./RotateMessage.css";

const RotateMessage = props => {
  return (
    <div className="rotate-message">
      <div className="rotate-message__bg" />
      <div className="rotate-message__wrapper">
        <div className="rotate-message__inner">
          Please, rotate your device for better experience.
        </div>
      </div>
    </div>
  );
};

export default RotateMessage;
