import React, { Component } from "react";
import InfoComponent from "./InfoComponent";
import Daily from "./Daily";
import HourlyTimeline from "./HourlyTimeline";
import "../../Styles/CurrentCity.css";

class CurrentCity extends Component {
  state = {
    currentcity: "London",
    country: "UK",
    temp: "5",
    weather: "Clear",
    date: "26 / 02 / 2019",
    daylight: false,
    hourlydata: [
      {
        DateTime: "2019-02-26T00:00:00+00:00",
        EpochDateTime: 1551139200,
        WeatherIcon: 33,
        IconPhrase: "Clear",
        IsDaylight: false,
        Temperature: {
          Value: 45,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=0&lang=en-us"
      },
      {
        DateTime: "2019-02-26T01:00:00+00:00",
        EpochDateTime: 1551142800,
        WeatherIcon: 33,
        IconPhrase: "Clear",
        IsDaylight: false,
        Temperature: {
          Value: 43,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=1&lang=en-us"
      },
      {
        DateTime: "2019-02-26T02:00:00+00:00",
        EpochDateTime: 1551146400,
        WeatherIcon: 33,
        IconPhrase: "Clear",
        IsDaylight: false,
        Temperature: {
          Value: 42,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=2&lang=en-us"
      },
      {
        DateTime: "2019-02-26T03:00:00+00:00",
        EpochDateTime: 1551150000,
        WeatherIcon: 33,
        IconPhrase: "Clear",
        IsDaylight: false,
        Temperature: {
          Value: 41,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=3&lang=en-us"
      },
      {
        DateTime: "2019-02-26T04:00:00+00:00",
        EpochDateTime: 1551153600,
        WeatherIcon: 33,
        IconPhrase: "Clear",
        IsDaylight: false,
        Temperature: {
          Value: 41,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=4&lang=en-us"
      },
      {
        DateTime: "2019-02-26T05:00:00+00:00",
        EpochDateTime: 1551157200,
        WeatherIcon: 33,
        IconPhrase: "Clear",
        IsDaylight: false,
        Temperature: {
          Value: 40,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=5&lang=en-us"
      },
      {
        DateTime: "2019-02-26T06:00:00+00:00",
        EpochDateTime: 1551160800,
        WeatherIcon: 33,
        IconPhrase: "Clear",
        IsDaylight: false,
        Temperature: {
          Value: 41,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=6&lang=en-us"
      },
      {
        DateTime: "2019-02-26T07:00:00+00:00",
        EpochDateTime: 1551164400,
        WeatherIcon: 1,
        IconPhrase: "Sunny",
        IsDaylight: true,
        Temperature: {
          Value: 42,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=7&lang=en-us"
      },
      {
        DateTime: "2019-02-26T08:00:00+00:00",
        EpochDateTime: 1551168000,
        WeatherIcon: 1,
        IconPhrase: "Sunny",
        IsDaylight: true,
        Temperature: {
          Value: 44,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=8&lang=en-us"
      },
      {
        DateTime: "2019-02-26T09:00:00+00:00",
        EpochDateTime: 1551171600,
        WeatherIcon: 1,
        IconPhrase: "Sunny",
        IsDaylight: true,
        Temperature: {
          Value: 46,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=9&lang=en-us"
      },
      {
        DateTime: "2019-02-26T10:00:00+00:00",
        EpochDateTime: 1551175200,
        WeatherIcon: 1,
        IconPhrase: "Sunny",
        IsDaylight: true,
        Temperature: {
          Value: 49,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=10&lang=en-us"
      },
      {
        DateTime: "2019-02-26T11:00:00+00:00",
        EpochDateTime: 1551178800,
        WeatherIcon: 1,
        IconPhrase: "Sunny",
        IsDaylight: true,
        Temperature: {
          Value: 53,
          Unit: "F",
          UnitType: 18
        },
        PrecipitationProbability: 0,
        MobileLink:
          "http://m.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&lang=en-us",
        Link:
          "http://www.accuweather.com/en/gb/london/ec4a-2/hourly-weather-forecast/328328?day=2&hbhhour=11&lang=en-us"
      }
    ],
    dailydata: "",
    apiKey: `iXgAA686OsaU7jvwEyJPKJEldgAJq8We`,
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
        $.getJSON("./data.json", function(data) {
          that.state.hourlydata = data;
          console.log(data);
        });
        that.setState({ state: that.state });
        //that.refreshTemperature();
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
        that.setState({ cityKey: Key });
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
