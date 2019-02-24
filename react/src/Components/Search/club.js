import React, { Component } from "react";
class club extends Component {
  render() {
    return (
      <div className="ratio">
        <img
          key={this.props.clubInfo.i}
          src={"http://localhost:5000" + this.props.clubInfo.img}
          alt={this.props.clubInfo.Club}
        />
        <label key={this.props.clubInfo.i}>{this.props.clubInfo.Club}</label>
        <label key={this.props.clubInfo.i}>
          {" "}
          {this.props.clubInfo.Stadium}
          {" Stadium"}
        </label>
      </div>
    );
  }
}

export default club;
