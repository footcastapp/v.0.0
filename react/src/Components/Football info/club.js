import React, { Component } from "react";
class club extends Component {
  render() {
    console.log(this.props.club.Club);
    return (
      <div className="ratio">
        <p key={this.props.i}>{this.props.club.Club}</p>
      </div>
    );
  }
}

export default club;
