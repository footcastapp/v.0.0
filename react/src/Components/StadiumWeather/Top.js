import React, { Component } from 'react';

class Top extends Component {
	state = {};

	render() {
		console.log(this.props.weather.weatherCurrent);
		let src = 'http://localhost:3000/Images/';
		switch (this.props.weather.weatherCurrent.wx_desc) {
			case 'Partly cloudy':
				src += 'Intermittent cloud.svg';
				break;
			case 'Mostly cloudy':
				src += 'cloudy.svg';
				break;
			case 'Light Rain':
				src += 'Showers.svg';
				break;
			default:
				src += 'Intermittent cloud.svg';
				break;
		}
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1; //January is 0!
		let yyyy = today.getFullYear();

		if (dd < 10) {
			dd = '0' + dd;
		}

		if (mm < 10) {
			mm = '0' + mm;
		}

		today = dd + '/' + mm + '/' + yyyy;
		console.log(this.props.weather.weatherForecast);
		return (
			<div className='Topback'>
				<h2 className='left'>
					{this.props.other.club.Stadium.Name} Stadium
				</h2>
				<p className='left' id='stadium'>
					Location: {this.props.other.club.Stadium.Location}
				</p>
				<p className='left' id='weatherdesc'>
					{this.props.weather.weatherCurrent.wx_desc}
				</p>
				<p className='left' id='date'>
					{today}
				</p>
				<img className='top' id='image' src={src} alt='' />
				<p className='top' id='temp'>
					{this.props.weather.weatherCurrent.temp_c}ºC
				</p>
			</div>
		);
	}
}

export default Top;
