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
    if (value === true && weather == "Clear") {
      src += "sunny.png";
    } else if (value === false && weather == "Clear") {
      src += "moon.png";
    } else {
      src += weather + ".png";
    }
    src = src.toString();
    console.log(this.props.location);
    return src;
  }
}

export default InfoComponent;
