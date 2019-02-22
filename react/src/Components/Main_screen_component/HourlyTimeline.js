import React, { Component } from "react";
import hourlyComponent from "./HourlyComponent";
import HourlyComponent from "./HourlyComponent";
import "../../Styles/HourlyTimeline.css";
class HourlyTimeline extends Component {
  state = {};
  render() {
    return (
      <div className="m-left-right">
        <hr />

        <ol id="inline">
          <div class="carosel">
            <li>
              <button>{`<`}</button>
            </li>
            <li className="hourly-tag">
              <HourlyComponent />
            </li>
            <li className="hourly-tag">
              <HourlyComponent />
            </li>
            <li className="hourly-tag">
              <HourlyComponent />
            </li>
            <li className="hourly-tag">
              <HourlyComponent />
            </li>
            <li className="hourly-tag">
              <HourlyComponent />
            </li>
            <li className="hourly-tag">
              <HourlyComponent />
            </li>
            <li>
              <button>{`>`}</button>
            </li>
          </div>
        </ol>
        <hr />
      </div>
    );
  }
}

export default HourlyTimeline;
