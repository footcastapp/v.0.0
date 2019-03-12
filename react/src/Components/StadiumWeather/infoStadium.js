import React, { Component } from 'react';
<<<<<<< HEAD

=======
import Top from './Top';
import Daily from './DailyWeather';
import Hourly from './HourlyWeather';
>>>>>>> 12019ef427e05569c202ca1f08e7bf6a580255f6
class Stadium extends Component {
	state = {};
	render() {
<<<<<<< HEAD
		return <div className="info">{this.props.club.Club}</div>;
=======
		return (
			<div className='weather-container'>
				<Top weather={this.state} other={this.props} />
				<Hourly weather={this.state} other={this.props} />
				<hr />
				<Daily weather={this.state} other={this.props} />
			</div>
		);
>>>>>>> 12019ef427e05569c202ca1f08e7bf6a580255f6
	}
}

export default Stadium;
