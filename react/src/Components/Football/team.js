import React, { Component } from "react";

class team extends Component {
  render() {
    return (
      <div>
        <button className="buttonn" onClick={() => this.clickk()}>
          <div>
            <h1>Teams</h1>
          </div>

          <p id="team">hgfdsxkjcsxckjhgfxa</p>
        </button>
      </div>
    );
  }
  clickk = () => {
    var g = document.getElementById("team");
    if (g.style.display === "block") {
      g.style.display = "none";
    } else {
      g.style.display = "block";
    }
  };
}

export default team;