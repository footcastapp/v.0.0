import React, { Component } from 'react';

class Stadium extends Component {
	state = {};
	render() {
		return <div className="info">{this.props.club.Club}</div>;
	}
}

export default Stadium;
