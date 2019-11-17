import React from "react";

import "./slides.css";

const SlideOne = props => {
  return (
    <div className="SlideOne">
      <div className="w50 h100 flex-column">
        <h2>{props.item.name}</h2>
        <div className="text">
          <hr />
          <p>{props.item.description}</p>
        </div>
      </div>
      <div className="w50 h100 bg-pink flex-center p-vertical">
        <img
          src={props.item.imageLink2}
          alt={props.item.name}
          className="image"
        />
      </div>
    </div>
  );
};

export default SlideOne;
