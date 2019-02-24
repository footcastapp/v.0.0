import React, { Component } from "react";

class Clubs extends Component {
  state = {};
  constructor() {
    super();
    this.state = {
      clubInfo: []
    };
  }
  componentDidMount() {
    fetch("/api/clubs")
      .then(res => res.json())
      .then(clubInfo => this.setState({ clubInfo }));
  }
  render() {
    return (
      <div>
        {this.state.clubInfo.map((clubInfo, index) => (
          <p key={index}>{clubInfo.Club}</p>
        ))}
      </div>
    );
  }
}

export default Clubs;
