import React, { Component } from "react";

class table extends Component {
  render() {
    return (
      <div className="lund1">
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1>Table</h1>
          </div>

          <p id="table">hgfdsxkjcsxckjhgfxa</p>
        </button>
      </div>
    );
  }
  clickk = () => {
    var g = document.getElementById("table");
    if (g.style.display === "block") {
      g.style.display = "none";
    } else {
      g.style.display = "block";
      document.getElementById("lund1").style.display = "none";
    }
  };
}

export default table;
