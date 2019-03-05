import React, { Component } from "react";

class smfixture2 extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.lol.Matchday.b.map((obj, i) => (
          <p key={i} className="res">
            {obj.Home + " " + obj.Score + " " + obj.Away}
          </p>
        ))}
      </div>
    );
  }
}

export default smfixture2;
