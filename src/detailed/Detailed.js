import React, { Component } from "react";
import SliderControl from "./SliderControl";
import SlideOne from "../slides/SlideOne";
import SlideTwo from "../slides/SlideTwo";
import SlideThree from "../slides/SlideThree";
import SlideFour from "../slides/SlideFour";

import items from "../collections.json";

import "./Detailed.css";

class Detailed extends Component {
  state = {
    currentSlide: 0,
    item: {},
    slidesLength: 4
  };

  getItemData = () => {
    const id = +this.props.match.params.id;
    const currentItem = items.find(el => +el.id === id);
    this.setState({ item: currentItem });
  };

  changeCurrentSlide = newVal => {
    this.setState({ currentSlide: newVal });
  };

  countNewSlideVal = num => {
    if (num > 0) {
      const slide =
        this.state.currentSlide + 1 < this.state.slidesLength
          ? this.state.currentSlide + 1
          : 0;
      this.changeCurrentSlide(slide);
    } else if (num < 0) {
      const slide =
        this.state.currentSlide - 1 >= 0
          ? this.state.currentSlide - 1
          : this.state.slidesLength - 1;
      this.changeCurrentSlide(slide);
    }
  };

  componentDidMount() {
    this.getItemData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (+this.props.match.params.id !== prevState.item.id) {
      this.getItemData();
      this.props.onChangePage(+this.props.match.params.id);
    }
    console.log(prevProps, prevState);
  }

  renderSlide = num => {
    const slides = [
      <SlideOne item={this.state.item} />,
      <SlideTwo item={this.state.item} />,
      <SlideThree item={this.state.item} />,
      <SlideFour item={this.state.item} />
    ];
    return slides[num];
  };

  render() {
    return (
      <div
        className="Detailed"
        onWheel={evt => this.countNewSlideVal(evt.deltaY)}
      >
        {this.renderSlide(this.state.currentSlide)}
        <div className="slider-controls">
          <SliderControl
            onChangeCurrentSlide={this.changeCurrentSlide}
            slidesCount={this.state.slidesLength}
            current={this.state.currentSlide}
          />
        </div>
      </div>
    );
  }
}

export default Detailed;
