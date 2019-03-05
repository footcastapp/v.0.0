import React, { Component } from 'react';
import Club from '../Football info/club';

class team extends Component {
	constructor() {
		super();
		this.state = {
			info: [],
		};
	}
	componentDidMount() {
		fetch('http://localhost:5000/api/PremierLeagueClubs.json')
			.then(res => res.json())
			.then(info => this.setState({ info }));
		let elements = document.getElementsByClassName('divTeam');
		elements[0].style.display = 'block';
	}
	clickk = () => {
		let g = document.getElementsByClassName('team');
		let h = document.getElementsByClassName('boom');
		if (h[0].style.display === 'block') {
			console.log('boom');
			for (let i = 0; i < g.length; i++) {
				g[i].style.display = 'block';
			}
			for (let i = 0; i < h.length; i++) {
				h[i].style.display = 'none';
			}
			let elements = document.getElementsByClassName('divResult');
			let elements2 = document.getElementsByClassName('divTable');
			let elements3 = document.getElementsByClassName('divFixture');

			elements[0].style.display = 'block';
			elements2[0].style.display = 'block';
			elements3[0].style.display = 'block';
		} else {
			console.log('boom2');
			for (let i = 0; i < g.length; i++) {
				g[i].style.display = 'none';
			}
			for (let i = 0; i < h.length; i++) {
				h[i].style.display = 'block';
			}
			let elements = document.getElementsByClassName('divResult');
			let elements2 = document.getElementsByClassName('divTable');
			let elements3 = document.getElementsByClassName('divFixture');

			elements[0].style.display = 'none';
			elements2[0].style.display = 'none';
			elements3[0].style.display = 'none';
		}
	};
	render() {
		return (
			<div className='divTeam'>
				<button className='buttonn' onClick={() => this.clickk()}>
					<div>
						<h1 className='u'>Teams</h1>
					</div>
				</button>
				{this.state.info.map((obj, index) => {
					if (index < 4) {
						return (
							<a
								className='team'
								href={'/club/' + obj.Club}
								key={index}
							>
								<Club key={index} club={obj} i={index} />
							</a>
						);
					}
				})}
				{this.state.info.map((obj, index) => {
					return (
						<a
							className='boom'
							href={'/club/' + obj.Club}
							key={index}
						>
							<Club key={index} club={obj} i={index} />
						</a>
					);
				})}
			</div>
		);
	}
}

export default team;
