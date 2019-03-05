import React, { Component } from "react";
import Stadium from "./stad";
class stadium extends Component {
  state = {};
  render() {
    return (
      <div className="clubStadium">
        {this.props.stadiumName.map((obj, index) => {
          console.log(obj.History.Trophies);
          if (obj.Club.toLowerCase() === this.props.club.toLowerCase()) {

            return <Stadium stadi={obj} key={index} i={index} />;
          }
        })}
      </div>
    );
  }
}

export default stadium;
