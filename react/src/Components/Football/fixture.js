import React, { Component } from "react";

class fixture extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="buttonn" onClick={() => this.clickk()}>
          <div className="lol">
            <h1>Fixture</h1>
          </div>

          <p id="fixture">hgfdsxkjcsxckjhgfxa</p>
        </button>
      </div>
    );
  }
  clickk = () => {
    var g = document.getElementById("fixture");
    var content = this.nextElementSibling;
    if (g.style.display == "block") {
      g.style.display = "none";
    } else {
      g.style.display = "block";
    }
  };
}

export default fixture;
