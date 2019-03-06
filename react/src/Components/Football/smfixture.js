import React, { Component } from "react";

class smfixture extends Component {
  state = {};

  render() {
    return (
      <div>
        {this.props.lol.Matchday.a.map((obj, i) => (
          <div>
            <p key={i} className="re">
              {obj.Home}
            </p>
            <p key={i} className="ra">
              {obj.Score}
            </p>
            <p key={i} className="ro">
              {obj.Away}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default smfixture;
