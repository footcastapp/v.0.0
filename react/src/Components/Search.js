import React, { Component } from 'react';
import SearchBar from './Search/SearchBar';

class Search extends Component {
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
		return (
			<div className='mainDiv'>
				<SearchBar clubInfo={this.state.clubInfo} />
			</div>
		);
	}
}

export default Search;
