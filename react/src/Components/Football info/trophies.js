import React, { Component } from "react";
import Trophy from "./trophy";
class trophies extends Component {
  state = {};
  render() {
    return (
      <div className="clubTrophies">
        <p>Club Trophies</p>
        
        {this.props.trophies.map((obj, index) => {
          console.log(obj.History.Trophies);
          if (obj.Club.toLowerCase() === this.props.club.toLowerCase()) {

            return <Trophy eltrophy={obj} key={index} i={index} />;
          }
        })}
      </div>
    );
  }
}

export default trophies;
