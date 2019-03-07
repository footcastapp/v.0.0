import React, { Component } from "react";
import sunny from "../../Images/weatherIcon/sunny.png";
import "../../Styles/DailyComponent.css";

class DailyComponent extends Component {
  render() {
    return (
      <div className="daily-component">
        <p>{this.props.day}</p>
        <img src={this.decidePhoto(true, this.props.weather)} alt="l" />
        <p>
          {this.props.min}-{this.props.max}ºC{" "}
        </p>
      </div>
    );
  }
  decidePhoto(value, weather) {
    let src = "../Images/";
    if (value === true && weather == "Clear") {
      src += "Sunny.svg";
    } else if (value === false && weather == "Clear") {
      src += "Moon.svg";
    } else {
      src += weather + ".svg";
    }
    src = src.toString();
    return src;
  }
}

export default DailyComponent;