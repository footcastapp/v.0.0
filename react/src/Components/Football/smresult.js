import React, { Component } from 'react';

class smresult extends Component {
	state = {};

	render() {
		var a = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';

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

export default smresult;
