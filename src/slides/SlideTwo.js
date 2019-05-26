import React from 'react';

const SlideTwo = (props) => (
  <div className="SlideTwo">
    <div className="w50 h100 bg-gray flex-center-top">
      <div className="image bg-pink">
        <img src={props.item.imageLink3} alt={props.item.name}/>
      </div>
    </div>
    <div className="w50 h100 flex-column">
      <div className="slogan">
        <pre>
          {props.item.slogan}
        </pre>
      </div>
    </div>
  </div>
)

export default SlideTwo;
