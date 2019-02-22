import React, { Component } from "react";
import InfoComponent from "./InfoComponent";
import Daily from "./Daily";
import HourlyTimeline from "./HourlyTimeline";
import "../../Styles/CurrentCity.css";
class CurrentCity extends Component {
  state = { currentcity: "London", country: "United Kingdom" };
  render() {
    return (
      <div className="weather-container">
        <InfoComponent
          city={this.state.currentcity}
          country={this.state.country}
        />
        <HourlyTimeline className="slider padding-10 m-left-right" />
        <Daily className="padding-10 m-left-right" />
      </div>
    );
  }
}

export default CurrentCity;
