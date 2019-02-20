import React, { Component } from "react";
import Slider from "react-rangeslider";
// add in ragenslider.js default styles here
import "react-rangeslider/lib/index.css";
class RangeSlideToSelect extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: 10
    };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = value => {
    this.setState({
      value: value
    });
  };

  handleChangeComplete = () => {
    console.log("Change event completed");
  };

  render() {
    const { value } = this.state;
    return (
      <div className={this.props.extraClassName}>
        <div className="slider">
          <div className="value">
            {this.props.freeText} {value} {this.props.freeTextAfter}
          </div>
          <Slider
            min={0}
            max={100}
            value={value}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
        </div>
      </div>
    );
  }
}

export default RangeSlideToSelect;
