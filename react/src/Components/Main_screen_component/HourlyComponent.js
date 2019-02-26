import React, { Component } from "react";
import sunny from "../../Images/weatherIcon/sunny.png";
import "../../Styles/HourlyComponent.css";

class HourlyComponent extends Component {
  render() {
    return (
      <div className="hourly-component">
        <p>{this.props.time}</p>
        <img
          src={this.decidePhoto(this.props.daylight, this.props.weather)}
          alt="l"
        />
        <p>{this.props.temp} ºC</p>
      </div>
    );
  }
  decidePhoto(value, weather) {
    let src = "../Images/";
    if (value === true && weather == "Clear") {
      src += "sunny.png";
    } else if (value === false && weather == "Clear") {
      src += "moon.png";
    } else {
      src += weather + ".png";
    }
    src = src.toString();
    return src;
  }
}

export default HourlyComponent;
