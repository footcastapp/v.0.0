import React, { Component } from "react";
import Club from "./club";

class Clubs extends Component {
  render() {
    if (this.props.clubInfo) {
      return (
        <div>
          {this.props.clubInfo.map((clubInfo, index) => (
            <Club key={index} clubInfo={clubInfo} i={index} />
          ))}
        </div>
      );
    }
  }
}

export default Clubs;
