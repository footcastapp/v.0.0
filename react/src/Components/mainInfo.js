import React, { Component } from "react";
import "../Styles/App.css";
import "../Styles/infoClubName.css";
import Info from "../Components/Football info/info";
import Trophies from "../Components/Football info/trophies";
import Manager from "../Components/Football info/manager";
import Stadium from "../Components/Football info/stadium";
class mainInfo extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/PremierLeagueClubs.json")
      .then(res => res.json())
      .then(info => this.setState({ info }));
  }
  render() {
    console.log(this.props.match.params.Club);
    return (
      <div className='out'>
        <Info clubName={this.state.info} club={this.props.match.params.Club} />
        <Trophies trophies={this.state.info} />
        <Manager managerName={this.state.info} />
        <Stadium stadiumName={this.state.info} />
      </div>
    );
  }
}

export default mainInfo;
