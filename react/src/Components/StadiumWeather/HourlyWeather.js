import React, { Component } from 'react';
import Hourly from './HourlyComponent';

class HourlyWeather extends Component {
	state = {};
	render() {
		let obj1 = { limit: 0,time:'' };
		if (this.props.weather.weatherForecast.length != 0) {
			return (
				<div className='m-left-right hourlydiv'>
					<hr />
					<div className='carosel'>
						<ol id='inline'>
							{this.props.weather.weatherForecast.Days.map(
								(obj, index) => {
									return (
										<Hourly
											key={index}
											timeframe={obj}
											obj1={obj1}
											i={index}
										/>
									);
								}
							)}
						</ol>
					</div>
				</div>
			);
		} else {
			return <div />;
		}
	}
}

export default HourlyWeather;
