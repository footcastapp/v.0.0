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
    let realWeather = weather.split(" w/ ");
    realWeather.map(each => each.trim());
    weather = realWeather.join("");
    console.log(weather);
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
    console.log(src);
    return src;
  }
}

export default HourlyComponent;
