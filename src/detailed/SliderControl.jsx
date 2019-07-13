import React from "react";

const SliderControl = props => {
  const controls = Array.from({ length: props.slidesCount }, (v, i) => {
    if (i + 1 < 10) {
      return `0${i + 1}`;
    }
    return (i + 1).toString();
  });
  function changeCurrentSlide(num) {
    props.onChangeCurrentSlide(+num);
  }
  return controls.map(item => {
    const classes =
      +item === +props.current ? "slider-control current" : "slider-control";
    return (
      <div
        key={item.toString()}
        className={classes}
        onClick={() => changeCurrentSlide(item)}
      >
        {item}
      </div>
    );
  });
};

export default SliderControl;
