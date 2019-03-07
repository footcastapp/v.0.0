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
          {this.props.max}-{this.props.min}ºC{" "}
        </p>
      </div>
    );
  }
  decidePhoto(value, weather) {
    let src = "../Images/";
    let realWeather = weather.split(" w/ ");
    realWeather.map(each => each.trim());
    weather = realWeather.join(" ");
    if (value === true && weather == "Clear") {
      src += "Sunny.svg";
    } else if (value === true && weather === "Mostly clear") {
      src += "Mostly clear day.svg";
    } else if (value === false && weather === "Clear") {
      src += "Moon.svg";
    } else if (value === false && weather === "Mostly clear") {
      src += "Mostly clear night.svg";
    } else {
      src += weather + ".svg";
    }
    src = src.toString();
    return src;
  }
}

export default DailyComponent;
