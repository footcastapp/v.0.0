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
      <div className="divTeam">
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
  componentDidMount() {
    let elements = document.getElementsByClassName("divTeam");
    elements[0].style.display = "block";
  }
  clickk = () => {
    var g = document.getElementById("team");
    if (g.style.display === "block") {
      g.style.display = "none";
      let elements = document.getElementsByClassName("divResult");
      let elements2 = document.getElementsByClassName("divTable");
      let elements3 = document.getElementsByClassName("divFixture");

      elements[0].style.display = "block";
      elements2[0].style.display = "block";
      elements3[0].style.display = "block";
    } else {
      g.style.display = "block";
      let elements = document.getElementsByClassName("divResult");
      let elements2 = document.getElementsByClassName("divTable");
      let elements3 = document.getElementsByClassName("divFixture");

      elements[0].style.display = "none";
      elements2[0].style.display = "none";
      elements3[0].style.display = "none";
    }
  };
}

export default team;
