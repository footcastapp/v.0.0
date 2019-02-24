import React, { Component } from "react";
import image from "../../Images/weatherIcon/partly-sun.png";
class InfoComponent extends Component {
  render() {
    return (
      <div className="container b-radius padding-10 m-left-right">
        <h1>{this.props.city}</h1>
        <span id="country">
          <p>{this.props.country}</p>
        </span>
        <img id="icon" src={image} className="z-2" alt="" />
        <span id="weather">
          <p>Partly cloudy</p>
        </span>
        <span id="temperature">
          <p>12 ºC</p>
        </span>
        <br />
        <span>
          <p>7th Feb 2019</p>
        </span>
      </div>
    );
  }
}

export default InfoComponent;
