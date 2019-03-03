import React, { Component } from "react";
class info extends Component {
  state = {};
  render() {
    console.log(this.props.clubName);
    return (
      <div className="clubHead">
        <p>{this.props.clubName.Club}</p>
      </div>
    );
  }
  getClub(){
    this.props.clubName.Map((obj,index)=>{
      
    });
  }
}

export default info;
