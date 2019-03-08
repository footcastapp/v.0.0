import React, { Component } from "react";
import SmFixture from "./smfixture";
import SmFixturee from "./smfixture2";

class fixture extends Component {
  render() {
    return (
      <div className="divFixture">
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1 className="u">Fixture</h1>
            {this.props.fixture.map((fixture, index) => (
              <SmFixture lol={fixture} key={index} i={index} />
            ))}
          </div>
          {this.props.fixture.map((fixture, index) => (
            <SmFixturee lol={fixture} key={index} i={index} />
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
    let g = document.getElementsByClassName("res");
    let a = document.getElementsByClassName("ras");
    let b = document.getElementsByClassName("ros");

    if (g[0].style.display === "block") {
      for (let i = 0; i < g.length; i++) {
        g[i].style.display = "none";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.display = "none";
      }
      for (let i = 0; i < b.length; i++) {
        b[i].style.display = "none";
      }
      let elements = document.getElementsByClassName("divTeam");
      let elements2 = document.getElementsByClassName("divTable");
      let elements3 = document.getElementsByClassName("divResult");
      elements[0].style.display = "block";
      elements2[0].style.display = "block";
      elements3[0].style.display = "block";
    } else {
      for (let i = 0; i < g.length; i++) {
        g[i].style.display = "block";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.display = "block";
      }
      for (let i = 0; i < b.length; i++) {
        b[i].style.display = "block";
      }

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
