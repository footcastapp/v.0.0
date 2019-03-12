import React, { Component } from 'react';
import Stadium from './StadiumWeather/infoStadium';
import Error from './error';

class mainStadium extends Component {
	constructor() {
		super();
		this.state = {
			clubInfo: [],
			weather: [],
			PostCodes: [
				'N77AJ',
				'BH77AF',
				'BN19BL',
				'BB104BX',
				'CF118AZ',
				'SW61HS',
				' SE256PU',
				'L44EL',
				'SW66HH',
				'HD16PX',
				'LE27FL',
				'L40TH',
				'M113FF',
				'M160RA',
				'NE14ST',
				'SO145FP',
				'N170AP',
				'WD187LE',
				'E15 1AZ',
				'WV14QR',
			],
			done: false,
		};
	}
	componentDidMount() {
		fetch('http://localhost:5000/api/PremierLeagueClubs.json')
			.then(res => res.json())
			.then(clubInfo => this.setState({ clubInfo }));
	}
	render() {
		return (
			<div className='main-screen'>
				{this.state.clubInfo.map((obj, index) => {
					if (
						this.props.match.params.Club.toLowerCase() ===
						obj.Club.toLowerCase()
					) {
						this.state.done = true;
						return (
							<Stadium
								key={index}
								arg={this.props.match.params.Club}
								club={obj}
								postcode={this.state.PostCodes[index]}
							/>
						);
					} else if (index === 19 && this.state.done === false) {
						return <Error key={index} />;
					}
				})}
			</div>
		);
	}
}

export default mainStadium;
