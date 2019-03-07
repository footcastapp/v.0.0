import React, { Component } from "react";
class InfoComponent extends Component {
  render() {
    console.log("I am in info component");
    return (
      <div className="container b-radius padding-10 m-left-right">
        <h1>{this.props.city}</h1>
        <span id="country">
          <p>{this.props.country}</p>
        </span>
        <img
          id="icon"
          src={this.decidePhoto(this.props.daylight, this.props.weather)} //this.props.daylight, this.props.weather)}
          className="z-2"
          alt=""
        />
        <span id="weather">
          <p>{this.props.weather}</p>
        </span>
        <span id="temperature">
          <p>{this.props.temp}ºC</p>
        </span>
        <br />
        <span>
          <p>{this.props.date}</p>
        </span>
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

export default InfoComponent;
