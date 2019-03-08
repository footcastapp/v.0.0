import React, { Component } from "react";

import DailyComponent from "./DailyComponent";
import "../../Styles/Daily.css";
class Daily extends Component {
  showComponents = () => {
    if (this.props.dailydata != "") {
      let data = this.props.dailydata;
      let components = [];
      const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      for (let each of data) {
        let eachDay = {};
        let minTemp = Math.round(
          (each.Temperature.Minimum.Value - 32) * (5 / 9)
        );
        let maxTemp = Math.round(
          (each.Temperature.Maximum.Value - 32) * (5 / 9)
        );
        eachDay.max = maxTemp;
        eachDay.min = minTemp;
        eachDay.weather = each.Day.IconPhrase;
        let tempDate = new Date(each.Date).getDay();
        if (tempDate == 0) {
          tempDate = 6;
        } else {
          tempDate--;
        }
        eachDay.day = days[tempDate];
        components.push(eachDay);
      }
      return components;
    }
  };
  render() {
    console.log(this.props.dailydata);
    return (
      <div className="daily-container m-left-right">
        <ol id="inline">
          <div className="">
            {this.showComponents().map((each, index) =>
              index != 0 ? (
                <li className="daily-tag">
                  <DailyComponent
                    max={each.max}
                    min={each.min}
                    weather={each.weather}
                    day={each.day}
                  />
                </li>
              ) : (
                <li id="first" className="daily-tag">
                  <DailyComponent
                    max={each.max}
                    min={each.min}
                    weather={each.weather}
                    day={"Today"}
                  />
                </li>
              )
            )}
          </div>
        </ol>
      </div>
    );
  }
}

export default Daily;
