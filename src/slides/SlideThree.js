import React from 'react';

const SlideThree = (props) => (
  <div className="SlideThree">
    <div className="w50 h100 bg-gray flex-center">
      <div className="figure">
        <div className="image">
          <img src={props.item.imageLink3} alt={props.item.name}/>
        </div>
        <div className="figure-caption">{props.item.description2}</div>
      </div>
    </div>
    <div className="w50 h100 flex-column bg-orange">
      <div className="text">{props.item.name} Agata Bielen</div>
      <div className="slogan">{props.item.slogan2}</div>
      <div className="share-links"><a href="instagram.com">share+</a></div>
    </div>
  </div>
)

export default SlideThree;
