import React, { Component } from 'react';

class Top extends Component {
	state = {};
	render() {
		console.log(this.props.weather.weatherCurrent);
		let src = 'http://localhost:5000/static/weatherIcon/';
		switch (this.props.weather.weatherCurrent.wx_desc) {
			case 'Partly cloudy':
				src += 'Intermittent cloud.svg';
				break;
			case 'Mostly cloudy':
				src += 'cloudy.png';
				break;
			case 'rainy':
				src += 'Showers.svg';
				break;
		}
		return (
			<div id='top'>
				<h1 className='left'>{this.props.other.club.Club}</h1>
				<img src={src} alt='' />
				<p>{this.props.weather.weatherCurrent.temp_c}ºC</p>
			</div>
		);
	}
}

export default Top;
