import React, { Component } from "react";
import SmTablee from "./smtablee";

class table extends Component {
  render() {
    console.log("boom" + this.props.table);
    return (
      <div className="divTable">
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1 className="u">Table</h1>
            {this.props.table.map((table, index) => (
              <SmTablee obj={table} key={index} i={index} />
            ))}
          </div>
        </button>
      </div>
    );
  }

  componentDidMount() {
    let elements = document.getElementsByClassName("divTable");
    elements[0].style.display = "block";
  }
  clickk = () => {
    let g = document.getElementsByClassName("res");

    if (g[0].style.display === "block") {
      for (let i = 0; i < g.length; i++) {
        g[i].style.display = "none";
      }

      let elements = document.getElementsByClassName("divTeam");
      let elements2 = document.getElementsByClassName("divResult");
      let elements3 = document.getElementsByClassName("divFixture");
      elements[0].style.display = "block";
      elements2[0].style.display = "block";
      elements3[0].style.display = "block";
    } else {
      for (let i = 0; i < g.length; i++) {
        g[i].style.display = "block";
      }

      let elements = document.getElementsByClassName("divFixture");
      let elements2 = document.getElementsByClassName("divResult");
      let elements3 = document.getElementsByClassName("divTeam");

      elements[0].style.display = "none";
      elements2[0].style.display = "none";
      elements3[0].style.display = "none";
    }
  };
}

export default table;
