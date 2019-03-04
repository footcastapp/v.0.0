import React, { Component } from 'react';
class club extends Component {
	render() {
		return (
			<a className = "link" href='/arsenal'>
				<div className='ratio'>
					<img
						className='clubImg'
						key={this.props.clubInfo.i}
						src={'http://localhost:5000' + this.props.clubInfo.img}
						alt={this.props.clubInfo.Club}
					/>
					<label className='mainLab' key={this.props.clubInfo.i}>
						{this.props.clubInfo.Club}
					</label>
					<label
						className='mainLab'
						key={this.props.clubInfo.i}
						id='stad'
					>
						{' ('}
						{this.props.clubInfo.Stadium.Name}
						{' Stadium)'}
					</label>
				</div>
			</a>
		);
	}
}

export default club;
