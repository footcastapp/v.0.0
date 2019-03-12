import React, { Component } from 'react';
import sunny from '../../Images/weatherIcon/sunny.png';
import '../../Styles/DailyComponent.css';

class DailyComponent extends Component {
	render() {
		return (
			<div className='daily-component' key={this.props.i}>
				<p id = 'days'>{this.props.day}</p>
				{this.props.weather.Timeframes.map((obj, index) => {
					if (obj.time === 1200) {
						return (
							<img
								key={index}
								src={this.decidePhoto(true, obj.wx_desc)}
								alt='l'
							/>
						);
					}
				})}
				<p>
					{this.props.min}-{this.props.max}ºC{' '}
				</p>
			</div>
		);
	}
	decidePhoto(value, weather) {
		let src = '../Images/';
		console.log(weather);
		if (value === true && weather == 'Clear') {
			src += 'Sunny.svg';
		} else if (value === false && weather == 'Clear') {
			src += 'Moon.svg';
		} else {
			src += weather + '.svg';
		}
		src = src.toString();
		return src;
	}
}

export default DailyComponent;
