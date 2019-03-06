import React, { Component } from 'react';

class smresult2 extends Component {
	state = {};
	render() {
		return (
			<div>
				{this.props.lol.Matchday.b.map((obj, i) => (
					<div key={i}>
						<p className='res'>{obj.Home}</p>
						<p className='ras'>{obj.Score}</p>
						<p className='ros'>{obj.Away}</p>
					</div>
				))}
			</div>
		);
	}
}

export default smresult2;
