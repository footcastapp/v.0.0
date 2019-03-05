import React, { Component } from "react";

class table extends Component {
  render() {
    return (
      <div className="divTable">
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1 className="u">Table</h1>
          </div>

          <p id="table">hgfdsxkjcsxckjhgfxa</p>
        </button>
      </div>
    );
  }
  componentDidMount() {
    let elements = document.getElementsByClassName("divTable");
    elements[0].style.display = "block";
  }
  clickk = () => {
    var g = document.getElementById("table");
    if (g.style.display === "block") {
      g.style.display = "none";
      let elements = document.getElementsByClassName("divResult");
      let elements2 = document.getElementsByClassName("divTeam");
      let elements3 = document.getElementsByClassName("divFixture");

      elements[0].style.display = "block";
      elements2[0].style.display = "block";
      elements3[0].style.display = "block";
    } else {
      g.style.display = "block";
      let elements = document.getElementsByClassName("divResult");
      let elements2 = document.getElementsByClassName("divFixture");
      let elements3 = document.getElementsByClassName("divTeam");

      elements[0].style.display = "none";
      elements2[0].style.display = "none";
      elements3[0].style.display = "none";
    }
  };
}

export default table;
