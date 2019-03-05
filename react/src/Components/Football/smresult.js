import React, { Component } from "react";

class smresult extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.lol.Matchday.a.map((obj, i) => (
          <p key={i} className="re">
            {obj.Home + " " + obj.Score + " " + obj.Away}
          </p>
        ))}
      </div>
    );
  }
}

export default smresult;
