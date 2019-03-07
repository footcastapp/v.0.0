import React, { Component } from 'react';
import Top from './Top';

class Stadium extends Component {
	constructor() {
		super();
		this.state = {
			weatherCurrent: [],
			weatherForecast: [],
		};
	}
	componentDidMount() {
		fetch(
			'http://api.weatherunlocked.com/api/current/UK.' +
				this.props.postcode +
				'?app_id=c8d45e0d&app_key=2fc409dd0e7d62983d91826396c15100'
		)
			.then(res => res.json())
			.then(weatherCurrent => this.setState({ weatherCurrent }));
		fetch(
			'http://api.weatherunlocked.com/api/current/UK.' +
				this.props.postcode +
				'?app_id=c8d45e0d&app_key=2fc409dd0e7d62983d91826396c15100'
		)
			.then(res => res.json())
			.then(weatherForecast => this.setState({ weatherForecast }));
	}

	render() {
		return (
			<div className='info'>
				<Top weather={this.state} other={this.props}/>
			</div>
		);
	}
}

export default Stadium;
