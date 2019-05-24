import React from 'react';
import SlideOne from '../slides/SlideOne';
import SlideTwo from '../slides/SlideTwo';
import SlideThree from '../slides/SlideThree';
import SlideFour from '../slides/SlideFour';

const slides = [
  <SlideOne />,
  <SlideTwo />,
  <SlideThree />,
  <SlideFour />
]

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
    return (
      <div key={item.toString()} className="slider-control" onClick={() => changeCurrentSlide(item)}>{item}</div>
    )
  })
}

class Detailed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentSlide: 0}
  }

  changeCurrentSlide = (newVal) => {
    this.setState({currentSlide: newVal})
  }

  render() {
    const current = slides[this.state.currentSlide];
    return (
      <div className="Detailed">
        {current}, {slides[this.state.currentSlide]}
        <div className="slider-controls">
          <SliderControl onChangeCurrentSlide={this.changeCurrentSlide} slidesCount={slides.length}/>
        </div>
      </div>
    )
  }
}

export default Detailed;
