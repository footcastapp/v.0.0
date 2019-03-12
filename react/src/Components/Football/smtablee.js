import React, { Component } from "react";

class smtablee extends Component {
  state = {};
  render() {
    return (
      <div key={this.props.i}>
        <img className="logo" src={this.props.obj.img} />

        <p className="tablere">{this.props.obj.Club}</p>
        <p className="tablera">{this.props.obj.played}</p>
        <p className="tablero">{this.props.obj.W}</p>
        <p className="tableri">{this.props.obj.D}</p>
        <p className="tablery">{this.props.obj.L}</p>
        <p className="tablerd">{this.props.obj.GD}</p>
        <p className="tablerp">{this.props.obj.points}</p>
      </div>
    );
  }
}

export default smtablee;
