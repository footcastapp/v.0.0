import React, { Component } from "react";
import InfoComponent from "./InfoComponent";
import Daily from "./Daily";
import HourlyTimeline from "./HourlyTimeline";
class CurrentCity extends Component {
  state = {};
  render() {
    return (
      <div>
        <InfoComponent />
        <HourlyTimeline />
        <Daily />
      </div>
    );
  }
}

export default CurrentCity;
