import React, { Component } from "react";
import image from "../../Images/weatherIcon/Sunp.png";
class InfoComponent extends Component {
  render() {
    return (
      <div className="container b-radius padding-10 m-left-right">
        <h1>{this.props.city}</h1>
        <p>{this.props.country}</p>
        <img src={image} className="z-2" />
      </div>
    );
  }
}

export default InfoComponent;
