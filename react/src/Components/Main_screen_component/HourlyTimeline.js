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
    console.log(this.props.hourlydata);
    if (this.props.hourlydata) {
      let data = this.props.hourlydata;
      let a,
        limit = 0;
      if (this.state.pointer == 0) {
        a = 0;
        limit = 6;
      } else {
        a = 6;
        limit = 12;
        this.state.pointer = 6;
      }
      let Components = [];
      for (let x = a; x < limit; x++) {
        console.log(x + " : " + limit);
        const each = data[x];
        console.log(each);
        const date = new Date(each.DateTime);
        let time = date.getHours() + ":" + date.getMinutes();
        let temperature = Math.round((each.Temperature.Value - 32) * (5 / 9));
        let daylight = each.IsDayLight;
        let obj = {
          time: time,
          weather: each.IconPhrase,
          temp: temperature,
          daylight: daylight
        };
        Components[x] = obj;
      }
      console.log("This is the object");
      console.log(Components);
      return Components;
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
            {this.showHourlyComponent().map(each => (
              <li className="hourly-tag">
                <HourlyComponent
                  time={each.time}
                  weather={each.weather}
                  temp={each.temp}
                  daylight={each.daylight}
                />
              </li>
            ))}
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
/*{this.showHourlyComponent().map(each => (
  <li className="hourly-tag">
    <HourlyComponent
      time={each.time}
      weather={each.weather}
      temp={each.temp}
      daylight={each.daylight}
    />
  </li>
))}

*/
