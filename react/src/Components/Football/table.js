import React, { Component } from "react";

class table extends Component {
  render() {
    return (
      <div>
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
    }
  };
}

export default table;
