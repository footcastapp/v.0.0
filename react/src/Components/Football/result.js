import React, { Component } from "react";
import SmResault from "./smresult";

class result extends Component {
  render() {
    return (
      <div className="divResult">
        <button className="buttonn" onClick={() => this.clickk()}>
          <div className="result">
            <h1>Result</h1>
          </div>
          {this.props.result.map((result, index) => (
            <SmResault lol={result} key={index} i={index} />
          ))}
        </button>
      </div>
    );
  }
  componentDidMount() {
    let elements = document.getElementsByClassName("divResult");
    elements[0].style.display = "block";
  }
  clickk = () => {
    var g = document.getElementById("result");
    if (g.style.display === "block") {
      g.style.display = "none";
      let elements = document.getElementsByClassName("divTeam");
      let elements2 = document.getElementsByClassName("divTable");
      let elements3 = document.getElementsByClassName("divFixture");

      elements[0].style.display = "block";
      elements2[0].style.display = "block";
      elements3[0].style.display = "block";
    } else {
      g.style.display = "block";

      let elements = document.getElementsByClassName("divFixture");
      let elements2 = document.getElementsByClassName("divTable");
      let elements3 = document.getElementsByClassName("divTeam");

      elements[0].style.display = "none";
      elements2[0].style.display = "none";
      elements3[0].style.display = "none";
    }
  };
}

export default result;
