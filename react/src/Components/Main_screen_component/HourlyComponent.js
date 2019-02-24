import React, { Component } from "react";
import sunny from "../../Images/weatherIcon/sunny.png";
import "../../Styles/HourlyComponent.css";

class HourlyComponent extends Component {
  render() {
    return (
      <div className="hourly-component">
        <p>16:00</p>
        <img src={sunny} alt="l" />
        <p>11 ºC</p>
      </div>
    );
  }
}

export default HourlyComponent;
