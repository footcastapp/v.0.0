import React, { Component } from "react";
import sunny from "../../Images/weatherIcon/sunny.png";
import "../../Styles/HourlyComponent.css";

class HourlyComponent extends Component {
  state = {};
  render() {
    return (
      <div className="hourly-component">
        <p>16:00</p>
        <img src={sunny} />
        <p>11 ºC</p>
      </div>
    );
  }
}

export default HourlyComponent;
