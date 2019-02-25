import React, { Component } from "react";
import sunny from "../../Images/weatherIcon/sunny.png";
import "../../Styles/DailyComponent.css";

class DailyComponent extends Component {
  render() {
    return (
      <div className="daily-component">
        <p>Mon</p>
        <img src={sunny} alt="l" />
        <p>9-11ºC </p>
      </div>
    );
  }
}

export default DailyComponent;
