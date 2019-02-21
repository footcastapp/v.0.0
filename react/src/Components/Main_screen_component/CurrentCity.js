import React, { Component } from "react";
import InfoComponent from "./InfoComponent";
import Daily from "./Daily";
import HourlyTimeline from "./HourlyTimeline";
class CurrentCity extends Component {
  state = { currentcity: "London", country: "United Kingdom" };
  render() {
    return (
      <div>
        <InfoComponent
          city={this.state.currentcity}
          country={this.state.country}
        />
        <hr />
        <HourlyTimeline className="padding-10 m-left-right" />
        <hr />
        <Daily className="padding-10 m-left-right" />
      </div>
    );
  }
}

export default CurrentCity;
