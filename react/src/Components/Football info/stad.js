import React, { Component } from "react";
class stad extends Component {
  render() {
    console.log(this.props.stadi.Stadium);
    return (
        
      <div key={this.props.i}>
        <p> Stadium Name : {this.props.stadi.Stadium.Name}</p>
        <p> Capacity : {this.props.stadi.Stadium.Capacity}</p>
        <p> Location : {this.props.stadi.Stadium.Location}</p>
      </div>
    );
  }
}

export default stad;
