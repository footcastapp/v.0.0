import React, { Component } from "react";

class smtable extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.lol.map((obj, i) => (
          <p key={i} className="re">
            {obj.img +
              " " +
              obj.Club +
              " " +
              obj.played +
              obj.W +
              obj.D +
              obj.L +
              obj.GD +
              obj.points}
          </p>
        ))}
      </div>
    );
  }
}

export default smtable;
