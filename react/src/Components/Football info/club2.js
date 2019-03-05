import React, { Component } from "react";
class club2 extends Component {
  render() {
    console.log(this.props.club.Club);
    return (
      <div className="clubHead">

      
        
        <img 
            className ="image"
            src={"http://localhost:5000" + this.props.club.img}
            alt={this.props.club.Club}
          />
      </div>
    );
  }
}

export default club2;