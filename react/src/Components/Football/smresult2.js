import React, { Component } from "react";

class smresult2 extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.lol.Matchday.b.map((obj, i) => (
          <div>
            <p key={i} className="res">
              {obj.Home}
            </p>
            <p key={i} className="ras">
              {obj.Score}
            </p>
            <p key={i} className="ros">
              {obj.Away}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default smresult2;
