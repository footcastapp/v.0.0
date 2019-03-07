import React, { Component } from 'react';
import Stadium from './StadiumWeather/infoStadium';
import Error from './error';

class mainStadium extends Component {
	constructor() {
		super();
		this.state = {
			clubInfo: [],
		};
	}
	componentDidMount() {
		fetch('http://localhost:5000/api/PremierLeagueClubs.json')
			.then(res => res.json())
			.then(clubInfo => this.setState({ clubInfo }));
	}
	render() {
		let done = false;
		return (
			<div>
				{this.state.clubInfo.map((obj, index) => {
					if (
						this.props.match.params.Club.toLowerCase() ===
						obj.Club.toLowerCase()
					) {
						done = true;
						return (
							<Stadium
								key={index}
								arg={this.props.match.params.Club}
								club={obj}
							/>
						);
					} else if (index === 19 && done === false) {
						return <Error key={index} />;
					}
				})}
			</div>
		);
	}
}

export default mainStadium;
