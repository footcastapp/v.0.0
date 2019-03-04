import React, { Component } from "react";
class club extends Component {
  render() {
    console.log(this.props.club.Club);
    return (
      <div className="ratio">
        <p className ="clubHead" key={this.props.i}>{this.props.club.Club}</p>
        <img 
            
            src={"http://localhost:5000" + this.props.club.img}
            alt={this.props.club.Club}
          />
      </div>
    );
  }
}

export default club;
