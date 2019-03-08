import React, { Component } from 'react';
import Daily from './DailyComponent';

class DailyWeather extends Component {
	state = {};
	render() {
		console.log(this.props.weather.weatherForecast.Days);
		if (this.props.weather.weatherForecast.Days != null) {
			return (
				<div className='daily margin'>
					<ol id='inline'>
              
						{this.props.weather.weatherForecast.Days.map(
							(obj, index) => {
								if (index < 5) {
									if (index != 0) {
										return (
											<li
												className='daily-tag'
												key={index}
											>
												<Daily
													i={index}
													day={obj.date}
													weather={obj}
													min={obj.temp_min_c}
													max={obj.temp_max_c}
													key={index}
												/>
											</li>
										);
									} else {
										return (
											<li
												id='first'
												className='daily-tag'
												key={index}
											>
												<Daily
													i={index}
													day={obj.date}
													weather={obj}
													min={obj.temp_min_c}
													max={obj.temp_max_c}
													key={index}
												/>
											</li>
										);
									}
								}
							}
						)}
					</ol>
				</div>
			);
		} else {
			return <div />;
		}
	}
}

export default DailyWeather;
