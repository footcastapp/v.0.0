import React, { Component } from "react";
import Trophy from "./trophy";
class trophies extends Component {
  state = {};
  render() {
    return (
      <div className="clubTrophies">
        <p>dd</p>
        {this.props.trophies.map((obj, index) => {
          console.log(obj.Trophies);
          if (obj.Trophies.toLowerCase() === this.props.club.toLowerCase()) {
            return <Trophy club={obj} key={index} i={index} />;
          }
        })}
      </div>
    );
  }
}

export default trophies;
