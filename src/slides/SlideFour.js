import React from 'react';

const SlideFour = (props) => (
  <div className="SlideFour">
    <div className="flex-center h100">
      <div className="season">{props.item.collectionSeason}</div>
      <img src={props.item.imageLink5} alt={props.item.name} className="image"/>
      <div className="year">{props.item.collectionYear}</div>
    </div>
  </div>
)

export default SlideFour;
