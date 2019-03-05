import React, { Component } from "react";
import SmFixturee from "./smfixture";
import SmFixturee2 from "./smfixture2";

class fixture extends Component {
  render() {
    return (
      <div className="divFixture">
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1 className="u">Fixture</h1>
            {this.props.fixture.map((result, index) => (
              <SmFixturee lol={result} key={index} i={index} />
            ))}
          </div>
          {this.props.fixture.map((result, index) => (
            <SmFixturee2 lol={result} key={index} i={index} />
          ))}
        </button>
      </div>
    );
  }
  componentDidMount() {
    let elements = document.getElementsByClassName("divFixture");
    elements[0].style.display = "block";
  }
  clickk = () => {
    var g = document.getElementById("fixture");
    if (g.style.display === "block") {
      g.style.display = "none";
      let elements = document.getElementsByClassName("divResult");
      let elements2 = document.getElementsByClassName("divTable");
      let elements3 = document.getElementsByClassName("divTeam");

      elements[0].style.display = "block";
      elements2[0].style.display = "block";
      elements3[0].style.display = "block";
    } else {
      g.style.display = "block";
      let elements = document.getElementsByClassName("divResult");
      let elements2 = document.getElementsByClassName("divTable");
      let elements3 = document.getElementsByClassName("divTeam");

      elements[0].style.display = "none";
      elements2[0].style.display = "none";
      elements3[0].style.display = "none";
    }
  };
}

export default fixture;
