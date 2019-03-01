import React, { Component } from "react";
import InfoComponent from "./InfoComponent";
import Daily from "./Daily";
import HourlyTimeline from "./HourlyTimeline";
import "../../Styles/CurrentCity.css";

class CurrentCity extends Component {
  state = {
    currentcity: "",
    country: "",
    temp: "",
    weather: "",
    date: "",
    daylight: "",
    hourlydata: "",
    dailydata: "",
    apiKey: `QYembYNdY0Vz9auLrLTrRtR2MGJLvG2Y`,
    cityKey: ""
  };
  constructor() {
    super();
    console.log("Constructor");
    this.refreshCity = this.refreshCity.bind(this);
    this.refreshTemperature = this.refreshTemperature.bind(this);
    this.refreshCurrentTemp = this.refreshCurrentTemp.bind(this);
    this.refreshCity();
  }
  refreshCity() {
    console.log("Api 1");
    const that = this;
    $.ajax("http://ip-api.com/json").then(
      function success(response) {
        let { city, country } = response;
        that.state.currentcity = city;
        that.state.country = country;
        // $.getJSON("./data.json", function(data) {
        //   that.state.hourlydata = data;
        //   console.log(data);
        // });
        that.setState({ state: that.state });
        that.refreshTemperature();
      },

      function fail(data, status) {
        return null;
      }
    );
  }
  refreshTemperature() {
    console.log("Api 2");
    let that = this;
    $.ajax(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${
        that.state.apiKey
      }&q=${that.state.currentcity}`
    ).then(
      function success(response) {
        let { Key } = response[0];
        that.state.cityKey = Key;
        that.setState({ state: that.state });
        that.refreshCurrentTemp();
      },

      function fail(data, status) {
        return console.log("Number of access");
      }
    );
  }

  refreshCurrentTemp() {
    console.log("Api 3");
    const that = this;
    let hourlyUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${
      that.state.cityKey
    }?apikey=${that.state.apiKey}`;
    $.ajax({
      url: hourlyUrl,
      async: false,
      dataType: "json",
      success: function(data) {
        const currentHour = data[0];
        let temperature = Math.round(
          (currentHour.Temperature.Value - 32) * (5 / 9)
        );
        that.state.temp = temperature;
        that.state.weather = currentHour.IconPhrase;
        that.state.daylight = currentHour.IsDaylight;
        let date = new Date(currentHour.DateTime);
        let value =
          date.getDate() +
          " / " +
          (date.getMonth() + 1) +
          " / " +
          date.getFullYear();
        that.state.date = value;
        that.state.hourlydata = data;
        that.setState({ state: that.state });
      }
    });
  }

  render() {
    // this.refreshTemperature();
    return (
      <div className="weather-container">
        <InfoComponent
          city={this.state.currentcity}
          country={this.state.country}
          temp={this.state.temp}
          weather={this.state.weather}
          date={this.state.date}
          daylight={this.state.daylight}
        />
        <HourlyTimeline
          className="slider padding-10 m-left-right"
          hourlydata={this.state.hourlydata}
        />
        <Daily className="padding-10 m-left-right" />
      </div>
    );
  }
}

export default CurrentCity;
