import React, { Component } from "react";
import HourlyComponent from "./HourlyComponent";
import "../../Styles/HourlyTimeline.css";
class HourlyTimeline extends Component {
  state = {
    pointer: 0
  };

  next = () => {
    console.log("Next");
    this.state.pointer = 6;
    this.setState({ state: this.state });
  };

  previous = () => {
    console.log("Previous");
    this.state.pointer = 0;
    this.setState({ state: this.state });
  };

  showHourlyComponent = () => {
    let data = this.props.hourlydata;
    if (this.state.pointer == 0) {
      for (let x = 1; x < 6; x++) {
        let each = data[x];
        return (
          <li className="hourly-tag">
            <HourlyComponent time="" weather="" temp="" />
          </li>
        );
      }
    }
  };
  render() {
    return (
      <div className="m-left-right">
        <hr />

        <ol id="inline">
          <div className="carosel">
            <li>
              <button onClick={this.previous}>{`<`}</button>
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
              <button onClick={this.next}>{`>`}</button>
            </li>
          </div>
        </ol>
        <hr />
      </div>
    );
  }
}

export default HourlyTimeline;
