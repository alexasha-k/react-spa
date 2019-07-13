import React, { Component } from "react";
import SliderControl from "./SliderControl";
import SlideOne from "../slides/SlideOne";
import SlideTwo from "../slides/SlideTwo";
import SlideThree from "../slides/SlideThree";
import SlideFour from "../slides/SlideFour";
import { Switch, Route } from "react-router-dom";

import items from "../collections.json";

import "./Detailed.css";

class Detailed extends Component {
  state = {
    currentSlide: 1,
    item: {},
    slidesLength: 4
  };

  getItemData = () => {
    const id = +this.props.match.params.id;
    const slide = +this.props.match.params.slide;
    const currentItem = items.find(el => +el.id === id);
    this.setState({ item: currentItem, currentSlide: slide });
  };

  changeCurrentSlide = newVal => {
    const id = +this.props.match.params.id;
    this.props.history.push("/collection/" + id + "/" + newVal);
  };

  countNewSlideVal = num => {
    if (num > 0) {
      const slide =
        this.state.currentSlide + 1 <= this.state.slidesLength
          ? this.state.currentSlide + 1
          : 1;
      this.changeCurrentSlide(slide);
    } else if (num < 0) {
      const slide =
        this.state.currentSlide - 1 > 0
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
  }

  render() {
    return (
      <div
        className="Detailed"
        onWheel={evt => this.countNewSlideVal(evt.deltaY)}
      >
        <Route
          render={() => (
            <Switch>
              <Route
                path="/collection/:id/1"
                render={props => <SlideOne {...props} item={this.state.item} />}
              />
              <Route
                path="/collection/:id/2"
                render={props => <SlideTwo {...props} item={this.state.item} />}
              />
              <Route
                path="/collection/:id/3"
                render={props => (
                  <SlideThree {...props} item={this.state.item} />
                )}
              />
              <Route
                path="/collection/:id/4"
                render={props => (
                  <SlideFour {...props} item={this.state.item} />
                )}
              />
            </Switch>
          )}
        />
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
