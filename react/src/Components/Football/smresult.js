import React, { Component } from "react";

class smresult extends Component {
  state = {};
  render() {
    return (
      <div id="boom">
        {this.props.lol.Matchday.Tue.map((obj, i) => (
          <div>
            <p id="result" key={i}>
              {obj.Home}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default smresult;
