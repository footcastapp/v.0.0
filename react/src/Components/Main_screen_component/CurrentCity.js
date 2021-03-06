import React, { Component } from 'react';
import InfoComponent from './InfoComponent';
import Daily from './Daily';
import HourlyTimeline from './HourlyTimeline';
import '../../Styles/CurrentCity.css';

class CurrentCity extends Component {
	state = {
		currentcity: '',
		country: '',
		temp: '',
		weather: '',
		date: '',
		daylight: '',
		hourlydata: '',
		dailydata: '',
		apiKey: `toRxP8wDhv0YnSKLDXxcI63KvAASRz50`,
		cityKey: '',
	};
	constructor() {
		super();
		this.refreshCity = this.refreshCity.bind(this);
		this.refreshTemperature = this.refreshTemperature.bind(this);
		this.refreshCurrentTemp = this.refreshCurrentTemp.bind(this);
		this.getDailyTemperature = this.getDailyTemperature.bind(this);
		this.refreshCity();
	}
	refreshCity() {
		const that = this;
		$.ajax('http://ip-api.com/json').then(
			function success(response) {
				let { city, country } = response;
				that.state.currentcity = city;
				that.state.country = country;
				that.refreshTemperature();
			},

			function fail(data, status) {
				return null;
			}
		);
	}
	refreshTemperature() {
		let that = this;
		$.ajax(
			`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${
				that.state.apiKey
			}&q=${that.state.currentcity}`
		).then(
			function success(response) {
				let { Key } = response[0];
				that.state.cityKey = Key;
				that.refreshCurrentTemp();
			},

			function fail(data, status) {
				return console.log('Number of access');
			}
		);
	}

	refreshCurrentTemp() {
		const that = this;
		let hourlyUrl = `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${
			that.state.cityKey
		}?apikey=${that.state.apiKey}`;
		$.ajax({
			url: hourlyUrl,
			async: false,
			dataType: 'json',
			success: function(data) {
				const currentHour = data[0];
				let temperature = Math.round(
					(currentHour.Temperature.Value - 32) * (5 / 9)
				);
				that.state.temp = temperature;
				that.state.weather = currentHour.IconPhrase;
				that.state.daylight = currentHour.IsDaylight;
				let date = new Date(currentHour.DateTime);
				const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
				const month = [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'July',
					'Aug',
					'Sept',
					'Oct',
					'Nov',
					'Dec',
				];
				let tempDate = date.getDay();
				if (tempDate == 0) {
					tempDate = 6;
				} else {
					tempDate--;
				}
				let value =
					date.getDate() +
					' ' +
					month[date.getMonth() + 1] +
					' ' +
					date.getFullYear() +
					' (' +
					days[tempDate] +
					')';
				that.state.date = value;
				that.state.hourlydata = data;
				that.getDailyTemperature();
			},
		});
	}

	getDailyTemperature() {
		const that = this;
		let dailyUrl = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${
			this.state.cityKey
		}?apikey=${this.state.apiKey}`;
		$.ajax({
			url: dailyUrl,
			async: false,
			dataType: 'json',
			success: function(data) {
				const dailyData = data.DailyForecasts;
				that.state.dailydata = dailyData;
				that.setState({ state: that.state });
			},
		});
	}
	render() {
		return (
			<div className='weather-container'>
				<InfoComponent
					city={this.state.currentcity}
					country={this.state.country}
					temp={this.state.temp}
					weather={this.state.weather}
					date={this.state.date}
					daylight={this.state.daylight}
				/>
				{this.state.hourlydata != '' ? (
					<HourlyTimeline
						className='slider padding-10 m-left-right'
						hourlydata={this.state.hourlydata}
					/>
				) : (
					<p />
				)}
				{this.state.dailydata != '' ? (
					<Daily
						className='padding-10 m-left-right'
						dailydata={this.state.dailydata}
					/>
				) : (
					<span />
				)}
			</div>
		);
	}
}

export default CurrentCity;
