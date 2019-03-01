import React, { Component } from "react";
import Sum from "../Football info/club";

class team extends Component {
  constructor() {
    super();
    this.state = {
      info: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/PremierLeagueClubs.json")
      .then(res => res.json())
      .then(info => this.setState({ info }));
  }
  
  
  render() {
    return (
      <div>
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1>Teams</h1>
          </div>
          </button>
          {this.state.info.map((nigga,index)=>{
            if (index < 4)
            return(
              <p id="team">
              <Sum key = {index} clubInfo = {nigga} i={index} />
              </p>
            )
              
            })}
          
          
      </div>
    );
  }
  clickk = () => {
    var g = document.getElementById("team");
    if (g.style.display === "block") {
      g.style.display = "none";
    } else {
      g.style.display = "block";
    }
  };
}

export default team;
