import React from "react";

const SlideFour = props => (
  <div className="SlideFour">
    <div className="flex-center h100">
      <div className="season">{props.item.collectionSeason}</div>
      <div className="image">
        <img src={props.item.imageLink5} alt={props.item.name} />
      </div>
      <div className="year">{props.item.collectionDesigner}</div>
    </div>
  </div>
);

export default SlideFour;
