import React, { Component } from "react";
class club extends Component {
  render() {
    return (
      <a href="/arsenal">
        <div className="ratio">
          <img
            className="clubImg"
            key={this.props.clubInfo.i}
            src={"http://localhost:5000" + this.props.clubInfo.img}
            alt={this.props.clubInfo.Club}
          />
          <label key={this.props.clubInfo.i}>{this.props.clubInfo.Club}</label>
          <label key={this.props.clubInfo.i} id="stad">
            {" ("}
            {this.props.clubInfo.Stadium.Name}
            {" Stadium)"}
          </label>
        </div>
      </a>
    );
  }
}

export default club;
