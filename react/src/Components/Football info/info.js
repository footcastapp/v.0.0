import React, { Component } from "react";
import Club from "./club";
class info extends Component {
  state = {};
  render() {
    return (
      <div className="clubHead">
        {this.props.clubName.map((obj, index) => {
          console.log(obj.Club);
          if (obj.Club.toLowerCase() === this.props.club.toLowerCase()) {
            return <Club club={obj} key={index} i={index} />;
          }
        })}
      </div>
    );
  }
}

export default info;
