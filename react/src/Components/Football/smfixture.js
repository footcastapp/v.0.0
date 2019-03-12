import React, { Component } from 'react';

class smfixture extends Component {
	state = {};

	render() {
		return (
			<div>
				{this.props.lol.Matchday.a.map((obj, i) => (
					<div key={i}>
						<p className='re'>{obj.Home}</p>
						<p className='ra'>{obj.Score}</p>
						<p className='ro'>{obj.Away}</p>
					</div>
				))}
			</div>
		);
	}
}

export default smfixture;
