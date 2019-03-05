import React, { Component } from "react";
import Club from "./club2";
class info extends Component {
  state = {};
  render() {
    return (
      <div className="classtop">
        {this.props.clubName.map((obj, index) => {
          if (obj.Club.toLowerCase() === this.props.club.toLowerCase()) {
            return <Club club={obj} key={index} i={index} />;
          }
        })}
      </div>
    );
  }
}

export default info;
