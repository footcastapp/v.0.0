import React, { Component } from "react";

class fixture extends Component {
  render() {
    return (
      <div className="lund">
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1>Fixture</h1>
          </div>

          <p id="fixture">hgfdsxkjcsxckjhgfxa</p>
        </button>
      </div>
    );
  }
  clickk = () => {
    var g = document.getElementById("fixture");
    if (g.style.display === "block") {
      g.style.display = "none";
    } else {
      g.style.display = "block";
      document.getElementById("lund1").style.display = "none";
    }
  };
}

export default fixture;
