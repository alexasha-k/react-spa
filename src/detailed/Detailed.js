import React from 'react';
import SlideOne from '../slides/SlideOne';
import SlideTwo from '../slides/SlideTwo';
import SlideThree from '../slides/SlideThree';
import SlideFour from '../slides/SlideFour';

import items from '../collections.json';

import './Detailed.css';

const SliderControl = (props) => {
  const arr = Array.from({length: props.slidesCount}, (v, i) => {
    if (i+1 < 10) {
      return `0${i+1}`;
    }
    return (i+1).toString()
  });
  function changeCurrentSlide(num) {
    props.onChangeCurrentSlide(+num - 1);
  }
  return arr.map((item) => {
    const classes = (+item - 1 === +props.current) ? 'slider-control current' : 'slider-control'
    return (
      <div key={item.toString()} className={classes} onClick={() => changeCurrentSlide(item)}>{item}</div>
    )
  })
}

class Detailed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentSlide: 0}
    this.slides = [
      <SlideOne item={this.getItemData(1)}/>,
      <SlideTwo item={this.getItemData(1)} />,
      <SlideThree item={this.getItemData(1)} />,
      <SlideFour item={this.getItemData(1)} />
    ]
  }

  changeCurrentSlide = (newVal) => {
    this.setState({currentSlide: newVal})
  }

  renderSlide = (curNum) => {
    return this.slides[curNum]
  }

  getItemData = (id) => {
    return items.find((el) => +el.id === id);
  }

  render() {
    const item = items.find((el) => +el.id === 1)
    return (
      <div className="Detailed">
        {this.renderSlide(this.state.currentSlide)}
        <div className="slider-controls">
          <SliderControl onChangeCurrentSlide={this.changeCurrentSlide}
                          slidesCount={this.slides.length}
                          current={this.state.currentSlide}/>
        </div>
      </div>
    )
  }
}

export default Detailed;
