import React, { Component } from 'react';

class HourlyComponent extends Component {
	state = {};
	render() {
		if (this.props.timeframe != null && this.props.obj1.limit < 6) {
			return (
				<div>
					{this.props.timeframe.Timeframes.map((obj, index) => {
						if (this.validate(obj, this.props.obj1, this.props.i)) {
							return (
								<li className='hourly-tagg' key={index}>
									<div className='hourly-component'>
										<p>{this.props.obj1.time}</p>
										<img
											src={this.decidePhoto(
												true,
												obj.wx_desc
											)}
											alt='l'
										/>
										<p>{obj.temp_c + 'ºC'} </p>
									</div>
								</li>
							);
						}
					})}
				</div>
			);
		} else {
			return <div />;
		}
	}
	validate(obj, obj1, d) {
		let current = new Date();
		if (obj1.limit < 6) {
			let time = current.getHours();

			let objtimearr = obj.time.toString();
			let objtime = '';

			if (objtimearr === '0') {
				objtime = '0';
			} else {
				objtimearr = objtimearr.split('0');
				objtime = objtimearr[0];
			}
			if (time <= objtime || d >= 1) {
				obj1.limit++;
				obj1.time = objtime + ':00';
				return true;
			}
		}
		return false;
	}
	decidePhoto(value, weather) {
		let src = '../Images/';
		let realWeather = weather.split(' w/ ');
		realWeather.map(each => each.trim());
		weather = realWeather.join('');

		if (value === true && weather == 'Clear') {
			src += 'Sunny.svg';
		} else if (value === true && weather === 'Mostly clear') {
			src += 'Mostly clear day.svg';
		} else if (value === false && weather === 'Clear') {
			src += 'Moon.svg';
		} else if (value === false && weather === 'Mostly clear') {
			src += 'Mostly clear night.svg';
		} else {
			src += weather + '.svg';
		}
		src = src.toString();
		return src;
	}
}

export default HourlyComponent;
