import React, { Component } from "react";
import SmResault from "./smresult";
import SmResault2 from "./smresult2";

class result extends Component {
  render() {
    return (
      <div className="divResult">
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1 className="u">Result</h1>
            {this.props.result.map((result, index) => (
              <SmResault lol={result} key={index} i={index} />
            ))}
          </div>
          {this.props.result.map((result, index) => (
            <SmResault2 lol={result} key={index} i={index} />
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
    let g = document.getElementsByClassName("res");

    if (g[0].style.display === "block") {
      for (let i = 0; i < g.length; i++) {
        g[i].style.display = "none";
      }
      let elements = document.getElementsByClassName("divTeam");
      let elements2 = document.getElementsByClassName("divTable");
      let elements3 = document.getElementsByClassName("divFixture");
      elements[0].style.display = "block";
      elements2[0].style.display = "block";
      elements3[0].style.display = "block";
    } else {
      for (let i = 0; i < g.length; i++) {
        g[i].style.display = "block";
      }

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
