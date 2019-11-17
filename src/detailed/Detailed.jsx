import "./Detailed.css";

import { Switch, Route } from "react-router-dom";
import React, { Component } from "react";

import SlideFour from "./slides/SlideFour";
import SlideOne from "./slides/SlideOne";
import SlideThree from "./slides/SlideThree";
import SlideTwo from "./slides/SlideTwo";
import SliderControl from "./SliderControl";
import items from "../assets/data/beaches.json";

class Detailed extends Component {
  state = {
    currentSlide: 1,
    item: null,
    slidesLength: 4
  };

  pageInFocus = React.createRef();

  focusPage = () => {
    this.pageInFocus.current.focus();
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

  incrementNewSlideVal = () => {
    const nextSlide = this.state.currentSlide + 1;
    const slide = nextSlide <= this.state.slidesLength ? nextSlide : 1;
    this.changeCurrentSlide(slide);
  };

  decrementNewSlideVal = () => {
    const prevSlide = this.state.currentSlide - 1;
    const slide = prevSlide > 0 ? prevSlide : this.state.slidesLength;
    this.changeCurrentSlide(slide);
  };

  countNewSlideVal = delta => {
    if (delta > 0) {
      this.incrementNewSlideVal();
    } else if (delta <= 0) {
      this.decrementNewSlideVal();
    }
  };

  goToNextPage = () => {
    const nextId = +this.props.match.params.id + 1;
    const id = nextId > this.props.collectionLength ? 1 : nextId;
    this.props.history.push("/collection/" + id + "/1");
  };

  goToPrevPage = () => {
    const prevId = +this.props.match.params.id - 1;
    const id = prevId <= 0 ? this.props.collectionLength : prevId;
    this.props.history.push("/collection/" + id + "/1");
  };

  handleKeyPress = e => {
    switch (e.keyCode) {
      case 40:
        this.incrementNewSlideVal();
        break;
      case 38:
        this.decrementNewSlideVal();
        break;
      case 39:
        this.goToNextPage();
        break;
      case 37:
        this.goToPrevPage();
        break;
      default:
        return false;
    }
  };

  componentDidMount() {
    this.focusPage();
    this.getItemData();
    this.props.onChangePage(+this.props.match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.item && +this.props.match.params.id !== prevState.item.id) {
      this.getItemData();
      this.props.onChangePage(+this.props.match.params.id);
    }
  }

  render() {
    return (
      <div
        ref={this.pageInFocus}
        className="Detailed"
        tabIndex="1"
        onWheel={evt => this.countNewSlideVal(evt.deltaY)}
        onKeyDown={this.handleKeyPress}
      >
        {this.state.item && (
          <Route
            render={() => (
              <Switch>
                <Route
                  path="/collection/:id/1"
                  render={props => (
                    <SlideOne {...props} item={this.state.item} />
                  )}
                />
                <Route
                  path="/collection/:id/2"
                  render={props => (
                    <SlideTwo {...props} item={this.state.item} />
                  )}
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
        )}

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
