import React, { Component } from "react";
import InfoComponent from "./InfoComponent";
import Daily from "./Daily";
import HourlyTimeline from "./HourlyTimeline";
import "../../Styles/CurrentCity.css";

class CurrentCity extends Component {
  state = {
    currentcity: "",
    country: "",
    apiKey: `ozf3wmtHsujhAkZPjibABY942wvPQCyh`,
    cityKey: ""
  };
  constructor() {
    super();
    this.refreshCity = this.refreshCity.bind(this);
    this.refreshTemperature = this.refreshTemperature.bind(this);
    this.refreshCity();
  }
  refreshCity = () => {
    const that = this;
    $.ajax("http://ip-api.com/json").then(
      function success(response) {
        let { city, country, Key } = response;
        that.setState({ currentcity: response.city });
        that.setState({ country: response.country });
      },

      function fail(data, status) {
        return null;
      }
    );
  };
  refreshTemperature = () => {
    let that = this;
    //console.log(state);

    $.ajax(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${
        that.state.apiKey
      }&q=${that.state.currentcity}`
    ).then(
      function success(response) {
        let { Key } = response[0];
        that.setState({ cityKey: Key });
      },

      function fail(data, status) {
        return console.log("Number of access");
      }
    );
  };

  componentDidMount() {
    console.log("Starting");
    this.refreshTemperature();
  }
  //this.setState({ currentcity: location.city });
  //this.setState({ country: location.country });
  //}

  render() {
    this.refreshTemperature();
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
