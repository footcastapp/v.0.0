import React, { Component } from "react";

import DailyComponent from "./DailyComponent";
import "../../Styles/Daily.css";
class Daily extends Component {
  render() {
    return (
      <div className="daily-container m-left-right">
        <ol id="inline">
          <div className="">
            <li id="first" className="daily-tag">
              <DailyComponent />
            </li>
            <li className="daily-tag">
              <DailyComponent />
            </li>
            <li className="daily-tag">
              <DailyComponent />
            </li>
            <li className="daily-tag">
              <DailyComponent />
            </li>
            <li className="daily-tag">
              <DailyComponent />
            </li>
          </div>
        </ol>
      </div>
    );
  }
}

export default Daily;
